/**
 * Created by JLou on 4/8/2016.
 */
import React from 'react';
import FoodItem from './FoodItem';
import { Label, Table } from 'react-bootstrap';

class FoodList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentFood: {foodInfo: []}
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
            url: `/schedule/food?scheduleId=${scheduleId}`,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (foodInfo) {
                _this.setState({currentFood: foodInfo});
                _this.forceUpdate();

            }.bind(this),
            error: function (xhr, status, err) {
                console.error("error");
            }.bind(this)
        });
    }

    render() {

        let foodItem = this.state.currentFood.foodInfo.map(function (food, index) {
            return (

                <FoodItem key={index} food={food}/>

            );
        });

        return (
            <Table hover striped>
                <tbody>
                {foodItem}
                </tbody>
            </Table>
        );
    }
}

export default FoodList;