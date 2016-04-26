/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'

export default React.createClass({

    getInitialState: function () {
        return {data: {commentsRes: []}};
    },

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.itemId !== this.props.itemId) {
            let itemId = String(Number(nextProps.itemId) + 1);
            this._handleUpdate(itemId, nextProps.category);
            return true;
        }

        return false;
    },

    componentDidMount: function () {

        let _this = this;
        let itemId = String(Number(this.props.itemId) + 1);
        let category = this.props.category;
        this._handleUpdate(itemId, category);

    },

    _handleUpdate: function (itemId, category) {

        $.ajax({
            url: `/${category}/comments?itemId=${itemId}`,
            type: 'get',
            dataType: 'json',
            cache: false,
            success: function (json) {
                this.setState({data: json});
                this.forceUpdate();
            }.bind(this),
            error: function (xhr, status, err) {
                console.error("error");
            }.bind(this)
        });
    },


    handleCommentSubmit: function (comment) {

        // Optimistically set an id on the new comment. It will be replaced by an
        // id generated by the server. In a production application you would likely
        // not use Date.now() for this and would have a more robust system in place.
        let itemId = String(Number(this.props.itemId) + 1);
        let category = this.props.category;
        let userId = this.props.userId;
        $.ajax({
            url: `/comments`,
            dataType: 'json',
            type: 'POST',
            data: {comments: comment.text, userId: userId, itemId: itemId, category: category},
            success: function (data) {
                this._handleUpdate(itemId, category);
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    },

    render: function () {
        return (
            <div className="commentBox">
                <h2>Comments</h2>
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
                <CommentList data={this.state.data.commentsRes}/>
            </div>
        );
    }
});