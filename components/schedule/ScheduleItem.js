/**
 * Created by JLou on 4/3/2016.
 */
import React from 'react';
import {Label} from 'react-bootstrap';

/**
 * render details of a schedule item
 */
class ScheduleItem extends React.Component {

    constructor(props) {
        super(props);
    }

    _handleClick() {
        this.props.onScheduleClick(this.props.index);
    }

    render() {

        return (
            <div onClick={this._handleClick.bind(this)}>
                <h2><Label>id: {this.props.scheduleItem.schedule_id.toString()}</Label></h2>
                <h2><Label>time: {this.props.scheduleItem.schedule_date.toString().substring(0, 10)}</Label></h2>
            </div>
        );
    }
}

export default ScheduleItem;