import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { removePost } from '../actions/postActions';
import PostContainer from './PostContainer';
import CommentList from './CommentList';

class PostDetailContainer extends Component {
    state = {  }    

    render() {
        const {post} = this.props;

        if (!post.id){
            return (
                <Redirect to={{pathname: '/'}} />
            );
        }

        return (
            <div className="card m-b-20 text-xs-center p-b-20">
                <PostContainer
                    post={post}
                />

                <CommentList
                    post={post}
                />
            </div>
        );
    }
}

function mapStateToProps ({posts}, ownProps) {
    return {
        post: {
            ...posts.list[ownProps.match.params['postId']]
        }
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        removePost: (post) => dispatch(removePost(post))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);