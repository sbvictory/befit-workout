'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var d3 = require('d3');

var Bar = React.createClass({

    getInitialState: function () {
        var shade = this.props.flash === "true" ? 0.7 : 0
        return {shade}
    },

    getDefaultProps: function () {
        return {
            width: 0,
            height: 0,
            offset: 0
        }
    },

    componentDidMount: function () {
        setTimeout(() => {
            if (this.isMounted()) this.setState({shade: 0})
        }, 150)
    },

    render: function () {

        var style = this.props.fillColor ?
        {fill: shadeColor(this.props.fillColor, this.state.shade)} : {};
        return (
            <rect
                className={this.props.focused ? 'focused' : ''}
                width={this.props.width} height={this.props.height}
                y={this.props.offset} x={this.props.x}
                onMouseOver={this.props.over}
                onMouseOut={this.props.out}
                style={style}
            />
        );
    }
});

var HBar = React.createClass({

    getDefaultProps: function () {
        return {
            width: 800,
            height: 400
        }
    },

    getInitialState: function () {

        return {
            hovered: null,
            data: [
                {v: 1, label: ''}
            ]
        }
    },

    componentDidMount: function () {

        let _this = this;

        $.ajax({
            url: `/leaderboard/topfood`,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (result) {

                let dataArr = result.topFood.map(function (obj) {
                    let data = {};
                    data.v = obj["count(recipies_tbl.food_id)"];
                    data.label = obj["food_name"];
                    return data;
                });

                _this.setState({data: dataArr});
                _this.forceUpdate();

            }.bind(this),
            error: function (xhr, status, err) {
                console.error("error");
            }.bind(this)
        })
    },

    render: function () {

        var props = this.props;
        var hbar = this

        //Save space for labels before the chart
        this.xBase = this.props.textPosition === 'fitted' ? 0 : this.props.width / 3

        hbar.scales()

        var data = this.state.data;

        data.sort(function (p, q) {
            return q.v - p.v
        });

        var dstyle = {
            float: 'left'
        }
        var dstyle2 = {
            float: 'right'
        }

        return (
            <div>
                <div>
                    <svg className="HBar" width={this.props.width} height={this.props.height}>
                        <g>
                            {data.map((point, i) =>
                                <Bar key={point.label + i}
                                     width={hbar.xScale(point.v)} height={hbar.yScale.rangeBand()}
                                     x={hbar.xBase}
                                     offset={hbar.yScale(i)}
                                     over={hbar.over.bind(hbar, i)}
                                     out={hbar.out}
                                     focused={hbar.state.hovered == i || hbar.props.focus - 1 == i}
                                     fillColor={hbar.props.barColor}
                                     flash={hbar.props.flash}
                                />
                            )}
                        </g>
                        <line className="axis"
                              x1={this.xBase} y1="0" x2={this.xBase} y2={this.yScale.rangeExtent()[1]}
                              style={{
                strokeWidth: (this.props.width * 0.002) + 'px',
                visibility: this.props.axis === 'false' ? 'hidden' : 'visible'
              }}
                        />
                        {this.drawTexts()}
                    </svg>
                </div>
                <div ><p>The top 3 foods that been selected most as recipies of users</p></div>
            </div>


        );
    },

    drawTexts: function () {
        var texts = [];
        // One specific bar should have its label and value
        if (this.props.focus != undefined) {
            var i = +this.props.focus - 1
            texts.push(this.drawText(i, this.state.data[i]))

            if (this.state.hovered != undefined && this.state.hovered != i) {
                texts.push(this.drawText(+this.state.hovered, this.state.data[i], 'hover'))
            }
        } else { // All bars should have texts
            texts = texts.concat(this.state.data.map((point, i) => {
                return this.drawText(i, point)
            }))
        }

        return (
            <g>
                {texts}
            </g>
        )

    },

    drawText: function (i, point, type) {

        var v = point.v

        /* Format the point if an input formatting function is available */
        if (this.props.formatter) {
            v = this.props.formatter(v)
        }

        var x = this.xScale(point.v) + this.xBase,
            y = this.yScale(i) + this.yScale.rangeBand() / 2,
            style = {fontSize: this.yScale.rangeBand() * 0.6 + 'px'},
            margin = this.props.width * 0.03,
            className = `texts ${type || ''}`

        if (this.props.textPosition === 'fitted') {
            var wide = x > this.props.width / 2 //the bar is wide, the point label will go inside

            return (
                <g key={point.label + i} className={className} style={style}>
                    <text className="inside"
                          y={y}
                          x={x - margin}
                          textAnchor="end">

                        {wide ? point.label : ''}
                    </text>
                    <text className="right"
                          y={y}
                          x={x + margin}
                          textAnchor="start">
                        {wide ? v : point.label + ', ' + v}
                    </text>
                </g>
            )
        } else {
            return (
                <g key={point.label + i} className={className} style={style}>
                    <text className="left"
                          y={y}
                          x={this.xBase - margin}
                          textAnchor="end">

                        {point.label}
                    </text>
                    <text className="right"
                          y={y}
                          x={x + margin}
                          textAnchor="start">
                        {v}
                    </text>
                </g>
            )

        }


    },

    over: function (i) {
        this.setState({
            hovered: i
        })
    },

    out: function () {
        this.setState({
            hovered: null
        })
    },

    scales: function () {
        var w = this.props.width
        this.xScale = d3.scale.linear()
            .domain([0, d3.max(this.state.data, function (p) {
                return p.v
            })])
            // leave some space in the container to display bar values
            .range([0, (w - this.xBase) * 0.8]);

        this.yScale = d3.scale.ordinal()
            .domain(d3.range(this.state.data.length))
            .rangeBands([0, this.props.height], 1 / 3, 1 / 2);
    }


});

/* Helpers */

// http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}


export default HBar;
