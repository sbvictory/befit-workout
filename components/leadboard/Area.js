/**
 * Created by Yang on 4/9/2016.
 */
import React from 'react';
import d3 from 'd3';
import { AreaChart } from 'react-d3-basic';

class Area extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topFood: {}
        };
    }

    componentDidMount() {
        let _this = this;
        $.ajax({
            url: `/leaderboard/foodtype`,
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
        var areadata = [{
            date: "04/23",
            sets: 200
        },
            {
                date: "04/24",
                sets: 50
            },
            {
                date: "04/25",
                sets: 300
            },
            {
                date: "04/26",
                sets: 150
            },
            {
                date: "04/27",
                sets: 400
            },
            {
                date: "04/28",
                sets: 350
            },
            {
                date: "04/29",
                sets: 300
            }
        ];

        var chartSeries1 = [
            {
                field: 'sets',
                name: 'Sets',
                color: 'Red',
                style: {
                    opacity: .2
                }
            }
        ];
        var parseDate = d3.time.format("%m/%d").parse,
            width1 = 800,
            height = 300,
            x = function (d) {
                return parseDate(d.date);
            };
        var xScale = "time";
        var yTickOrient = 'right';
        return (
            <div id="chart1">
                <AreaChart
                    data={areadata}
                    width={width1}
                    height={height}
                    chartSeries={chartSeries1}
                    x={x}
                    xScale={xScale}
                    yTickOrient={yTickOrient}
                />
                <p>The excecises records that this user had last week</p>
            </div>
        );
    }
}

export default Area;
