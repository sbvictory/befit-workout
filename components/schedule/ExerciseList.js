/**
 * Created by JLou on 4/3/2016.
 */


import React from 'react';
import ExerciseItem from './ExerciseItem';
import { Table } from 'react-bootstrap';

class ExerciseList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentExercises: {exerciseInfo: []}
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        if (this.props.currentScheduleIndex !== nextProps.currentScheduleIndex) {
            this._handleUpdate(nextProps.currentScheduleIndex);
            return true;
        }

        return false;
    }

    _handleUpdate(index) {

        let _this = this;
        let scheduleId = this.props.scheduleData.scheduleInfo[index].schedule_id;

        $.ajax({
            url: `/schedule/exercise?scheduleId=${scheduleId}`,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (exerciseInfo) {
                _this.setState({currentExercises: exerciseInfo});
                _this.forceUpdate();

            }.bind(this),
            error: function (xhr, status, err) {
                console.error("error");
            }.bind(this)
        });
    }

    render() {


        let exerciseItem = this.state.currentExercises.exerciseInfo.map(function (exercise, index) {
            return (

                <ExerciseItem key={index} exercise={exercise}/>

            );
        });

        return (
            <Table>
                <tbody>
                {exerciseItem}
                </tbody>
            </Table>
        );
    }
}

export default ExerciseList;