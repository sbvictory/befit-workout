/**
 * Created by JLou on 4/3/2016.
 */
import React from 'react';
import { Label } from 'react-bootstrap';

class ExerciseItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <tr>
                <td>
                    <h2><Label bsStyle="success">{this.props.exercise.activity.toString()}</Label></h2>
                    <h2><Label bsStyle="primary">Start {this.props.exercise.exerises_from.toString()}</Label></h2>
                    <h2><Label bsStyle="primary">End {this.props.exercise.exerises_to.toString()}</Label></h2>
                    <h2><Label bsStyle="info">Set {this.props.exercise.sets.toString()}</Label></h2>
                </td>
            </tr>
        );
    }
}

export default ExerciseItem;