import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { removeComment, addCommentVote, removeCommentVote } from '../actions/comments';
import { ToReadableDate } from '../utils/DateHelper';

class CommentContainer extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        handleRemoveComment: PropTypes.func.isRequired,
        handleCommentAddVote: PropTypes.func.isRequired,
        handleCommentRemoveVote: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { comment, handleRemoveComment, handleCommentAddVote, handleCommentRemoveVote } = this.props;
        return (
            <div className="card-body text-muted alert-info m-t-15 m-l-10" key={comment.id}>
                <b>[{ToReadableDate(comment.timestamp)}] {comment.author} commented:</b>
                <p className="m-t-15">{comment.body}</p>
                
                <Link className="btn btn-primary m-r-10" to={{ pathname: `/comment/edit/${comment.id}`}}>Edit</Link>

                <button className="btn btn-danger" onClick={() => handleRemoveComment({comment: comment})}>
                    <span className="mdi mdi-delete" /> delete
                </button>

                <button className="btn btn-primary" onClick={() => handleCommentAddVote({comment: comment})}>
                    <span className="mdi mdi-thumb-up" />
                </button>
                <span className="badge badge-success">{comment.voteScore}</span>
                <button className="btn btn-primary" onClick={() => handleCommentRemoveVote({comment: comment})}>
                    <span className="mdi mdi-thumb-down" /> 
                </button>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        comment: {
            ...ownProps.comment
        }
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        handleRemoveComment: (comment) => dispatch(removeComment(comment)),
        handleCommentAddVote: (comment) => dispatch(addCommentVote(comment)),
        handleCommentRemoveVote: (comment) => dispatch(removeCommentVote(comment))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentContainer);