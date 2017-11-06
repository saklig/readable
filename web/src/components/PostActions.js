import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removePost, addVote, removeVote} from '../actions/posts';

class PostActions extends Component {
    state = {  }
    render() {
        const { post, addVote, removeVote, removePost} = this.props;
        return (
            <div className="pull-right">
                <Link className="btn btn-primary m-r-10" to={{ pathname: `/posts/detail/${post.id}`, post: post}}>View</Link>

                <Link className="btn btn-primary m-r-10" to={{ pathname: `/posts/edit/${post.id}`, post: post}}>Edit</Link>

                <button className="btn btn-primary m-r-10" onClick={() => addVote({post: post})}>
                    <span className="mdi mdi-thumb-up" />
                </button>
                <span className="badge badge-success m-r-10">{post.voteScore}</span>
                <button className="btn btn-primary m-r-10" onClick={() => removeVote({post: post})}>
                    <span className="mdi mdi-thumb-down" /> 
                </button>
                <button className="btn btn-danger m-r-10" onClick={() => {
                    removePost({post: post});
                }}>
                    <span className="mdi mdi-delete" /> remove post
                </button>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        post: {
            ...ownProps.post
        }
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        addVote: (post) => dispatch(addVote(post)),
        removeVote: (post) => dispatch(removeVote(post)),
        removePost: (post) => dispatch(removePost(post)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostActions);