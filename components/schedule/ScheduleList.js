/**
 * Created by JLou on 4/3/2016.
 */

import React from 'react';
import ScheduleItem from './ScheduleItem';
import { Table } from 'react-bootstrap';

class ScheduleList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let _this = this;

        let scheduleItem = this.props.scheduleData.scheduleInfo.map(function (scheduleItem, index) {
            return (
                <tr>
                    <td>
                        <ScheduleItem key={scheduleItem.schedule_id}
                                      scheduleItem={scheduleItem}
                                      index={index}
                                      onScheduleClick={_this.props.onScheduleClick}
                        />
                    </td>
                </tr>

            );
        });

        return (
            <Table hover striped>
                <tbody>
                {scheduleItem}
                </tbody>
            </Table>
        );
    }
}

export default ScheduleList;