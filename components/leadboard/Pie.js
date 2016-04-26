/**
 * Created by JLou on 4/9/2016.
 */
import React from 'react';
import d3 from 'd3';
import { PieTooltip } from 'react-d3-tooltip';

class Pie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topFood: {}
        };
    }

    componentDidMount() {

        let _this = this;

        $.ajax({
            url: `/leaderboard/topfood?userId=${localStorage.getItem('userId')}`,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (topFood) {
                console.log(topFood);
                this.setState({topFood: topFood});
                _this.forceUpdate();

            }.bind(this),
            error: function (xhr, status, err) {
                console.error("error");
            }.bind(this)
        });

    }


    render() {
        var fooddata = [
            {
                type: "Protein",
                proportion: 40
            },
            {
                type: "Carb",
                proportion: 30
            },
            {
                type: "Fat",
                proportion: 30
            }
        ];
        var width = 500,
            height = 300,
            title = "Pie Chart With Tooltip",
        // value accessor
            value = function (d) {
                return +d.proportion;
            },
        // name accessor
            name = function (d) {
                return d.type;
            },
        // field means what your input field name is,
        // name means the name show in the legend in your chart.
            chartSeries = [
                {
                    "field": "Protein",
                    "name": "Protein"
                },
                {
                    "field": "Carb",
                    "name": "Carb"
                },
                {
                    "field": "Fat",
                    "name": "Fat"
                }
            ];
        return (
            <div id="chart">
                <PieTooltip
                    title={title}
                    data={fooddata}
                    width={width}
                    height={height}
                    chartSeries={chartSeries}
                    value={value}
                    name={name}
                />
                <p>The distribution of the nuritions that the user had last week</p>
            </div>
        );
    }
}

export default Pie;
