import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetForm, updateCommentForm } from '../actions/formActions';
import { updateComment, fetchComment, addComment } from '../actions/commentActions';
import uuid from 'uuid';

class EditCommentContainer extends Component {
    state = {  }

    componentDidMount(){
        const { resetForm, commentId, fetchComment, comment } = this.props;
        if(commentId && !comment.id){
            fetchComment(commentId);
        }
        else{
            resetForm();
        }
    }

    handleInputChange = (event) => {
        const { comment, updateCommentForm } = this.props;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        updateCommentForm(name, value, comment);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { post, addComment, comment, commentId, updateComment } = this.props;

        if (commentId && comment.id) {
            updateComment(comment);
        } else {
            addComment({comment: {            
                id: uuid(),
                parentId: post.id,
                timestamp: Date.now(),
                body: comment.body,
                author: comment.author,
                voteScore: 1,
                deleted: false,
                parentDeleted: false
            }});
        }


    }

    render() {
        const { comment } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card-body text-muted">
                    <input type="text" className="form-control col-lg-4" placeholder="name" name="author" value={comment.author} onChange={(event) => this.handleInputChange(event)} />
                    <textarea className="form-control col-lg-4" placeholder="comment" rows="4" name="body" value={comment.body} onChange={(event) => this.handleInputChange(event)} />
                    <button type="submit" className="btn btn-primary">
                        <icon className="mdi mdi-plus" /> {comment.id ? 'Edit comment' : 'Add comment'}
                    </button>
                </div>
            </form>
        );
    }
}

function mapStateToProps ({ form, comments }, ownProps) {
    return {
        comments: Object.keys(comments).reduce((arr, e) => {
            arr.push(comments[e]);
            return arr;
        }, []),
        post: ownProps.post,
        commentId: ownProps.match ? ownProps.match.params['commentId'] : undefined,
        comment: form.comment || {}
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        updateComment: (comment) => dispatch(updateComment(comment)),
        updateCommentForm: (name, value, post) => dispatch(updateCommentForm(name, value, post)),
        resetForm: () => dispatch(resetForm()),
        fetchComment: (commentId) => dispatch(fetchComment(commentId)),
        addComment: (comment) => dispatch(addComment(comment)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer);