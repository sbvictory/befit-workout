/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import { Input, Button } from 'react-bootstrap';

export default React.createClass({
    getInitialState: function () {
        return {text: ''};
    },

    handleTextChange: function (e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function (e) {
        e.preventDefault();
        if (this.state.text == null) return;
        var text = this.state.text.trim();

        if (!text) {
            return;
        }

        // use call back to pass props to parent
        this.props.onCommentSubmit({text: text});
        this.setState({text: ''});
    },

    render: function () {

        let formStyle = {
            marginBottom: "20px"
        }

        let buttonStyle = {
            marginLeft: "80%"
        }

        return (
            <div style={formStyle}>
                <form>
                    <Input
                        type="textarea"
                        placeholder="Leave your comments here:)"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                </form>
                <Button bsStyle="primary" style={buttonStyle} onClick={this.handleSubmit}>POST</Button>
            </div>
        );
    }
});