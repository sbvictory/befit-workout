/**
 * Created by JLou on 4/12/2016.
 */
import React from 'react';
import { Input, Row, Col } from 'react-bootstrap';

class SimpleDatePicker extends React.Component {

    constructor(props) {
        super(props);
    }

    _handleYearChange(e) {
        e.preventDefault;
        this.props.onDateChange({year: this.refs.year.getValue()});

    }

    _handleMonthChange(e) {
        e.preventDefault;
        this.props.onDateChange({month: this.refs.month.getValue()});
    }

    _handleDayChange(e) {
        e.preventDefault;
        this.props.onDateChange({day: this.refs.day.getValue()});
    }

    render() {

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Mov', 'Dec'];
        const days = [];
        for (let i = 1; i < 32; i++) {
            days.push(i);
        }

        let years = [];
        for (let i = 2010; i < 2230; i++) {
            years.push(i);
        }

        return (
            <Row>
                <Col xs={4}>
                    <Input type="select" label="Year" ref="year" onChange={this._handleYearChange.bind(this)}>

                        {
                            years.map(function (year, index) {
                                return (
                                    <option key={index} value={year}>{year}</option>
                                );
                            })
                        }
                    </Input>
                </Col>
                <Col xs={4}>
                    <Input type="select" label="Month" ref="month" onChange={this._handleMonthChange.bind(this)}>

                        {
                            months.map(function (month, index) {
                                return (
                                    <option key={index} value={month}>{month}</option>
                                );
                            })
                        }
                    </Input>
                </Col>
                <Col xs={4}>
                    <Input type="select" label="Day" ref="day" onChange={this._handleDayChange.bind(this)}>
                        {
                            days.map(function (day, index) {
                                return (
                                    <option key={index} value={day}>{day}</option>
                                );
                            })
                        }
                    </Input>
                </Col>
            </Row>
        );
    }
}

export default SimpleDatePicker;