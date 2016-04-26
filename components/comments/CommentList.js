/**
 * Created by JLou on 3/27/2016.
 */
import React from 'react';
import Comment from './Comment';

export default React.createClass({

    render() {

        let commentNodes = this.props.data.map(function (comment) {
            return (

                <Comment author={comment.user_name} key={comment.comment_id}>
                    {comment.comments}
                </Comment>

            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});