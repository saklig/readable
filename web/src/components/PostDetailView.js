import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';
import CommentList from './CommentList';
import ErrorView from './ErrorView';

class PostDetailView extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
        const { post, postsLoaded } = this.props;

        if (!postsLoaded){
            return null;
        }

        if (!post.id){
            return (<ErrorView
                errorMessage={'The post you tried to access could not be found'}
            />);
        }

        return (
            <div className="card m-b-20 text-xs-center m-t-15">
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
        },
        postsLoaded: posts.postsLoaded
    };
}

export default connect(mapStateToProps, null)(PostDetailView);