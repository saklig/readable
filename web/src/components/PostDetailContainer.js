import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';
import CommentList from './CommentList';

class PostDetailContainer extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const {post} = this.props;

        if (!post.id){
            return (
                <Redirect to={{pathname: '/'}} />
            );
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
        }
    };
}
  
function mapDispatchToProps (dispatch) {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer);