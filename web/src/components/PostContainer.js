import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostActions from './PostActions';
import { fetchComments } from '../actions/comments';
import { ToReadableDate } from '../utils/DateHelper';

class PostContainer extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired,
        comments: PropTypes.array.isRequired,
        fetchComments: PropTypes.func.isRequired
    }

    componentDidMount(){
        const { fetchComments, post } = this.props;
        fetchComments(post.id);
    }

    render() {
        const { post, comments } = this.props;

        return (
            <div className="">
                <div className="card-body">
                    <PostActions post={post} />
                    <h4 className="card-title">{post.title} <span className="text-muted m-b-5 font-13">{ToReadableDate(post.timestamp)}</span></h4>
                    <div className="card-text">
                        <i>by {post.author}</i>
                        <p className="m-t-10">
                            {post.body}
                        </p>
                        <span className="mdi mdi-comment-outline">
                            {comments.filter((c) => c.parentId === post.id).length}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ comments }, ownProps) {
    return {
        post: {
            ...ownProps.post
        },
        comments: Object.keys(comments).reduce((arr, e) => {
            arr.push(comments[e]);
            return arr;
        }, []),
    };
}
  
function mapDispatchToProps (dispatch) {    
    return {
        fetchComments: (postId) => dispatch(fetchComments(postId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);