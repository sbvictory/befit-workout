/**
 * Created by JLou on 4/13/2016.
 */

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class FoodItem extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Proptypes for validation
     */
    static get propTypes() {
        return {
            title: React.PropTypes.string.isRequired,
            handleOnClickClose: React.PropTypes.func.isRequired,
            handleOnClickSubmit: React.PropTypes.func.isRequired
        }
    }

    render() {

        return (
            <div className="static-modal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">{this.props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>{this.props.children}</Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.handleOnClickClose}>Close</Button>
                    <Button bsStyle="primary" onClick={this.props.handleOnClickSubmit}>Save changes</Button>
                </Modal.Footer>
            </div>
        );
    }
}

export default FoodItem;