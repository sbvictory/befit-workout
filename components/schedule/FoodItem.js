/**
 * Created by JLou on 4/8/2016.
 */
import React from 'react';
import { Label } from 'react-bootstrap';

class FoodItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <tr>
                <td>
                    <h3><Label bsStyle="success">Name: {this.props.food.food_name.toString()}</Label></h3>
                    <h2><Label bsStyle="primary">Calories: {this.props.food.food_calories.toString()}</Label></h2>
                    <h2><Label bsStyle="primary">Time: {this.props.food.recipies_time.toString()}</Label></h2>
                    <h2><Label bsStyle="info">Nutrition: {this.props.food.food_type.toString()}</Label></h2>
                </td>
            </tr>
        );
    }
}

export default FoodItem;