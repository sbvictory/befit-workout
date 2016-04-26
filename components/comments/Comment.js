/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import {Label} from 'react-bootstrap';

export default React.createClass({

    render: function () {

        let commentStyle = {
            borderTopStyle: "solid",
            borderTopColor: "green"
        }

        let textStyle = {
            marginLeft: "50px"
        }

        return (
            <div style={commentStyle}>
                <h3><Label bsStyle="info">
                    {this.props.author}
                </Label></h3>
                <div style={textStyle}>
                    {this.props.children.toString()}
                </div>
            </div>
        );
    }
});