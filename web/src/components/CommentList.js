import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentContainer from './CommentContainer';
import EditCommentContainer from './EditCommentContainer';
import { fetchComments } from '../actions/comments';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        post: PropTypes.object.isRequired,
        fetchComments: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount(){
        this.props.fetchComments(this.props.post.id);
    }

    render() {
        const { post, comments} = this.props;

        return (
            <div className="col-lg-6">
                {comments.filter((c) => c.parentId === post.id && !c.deleted).sort((a,b) => b.voteScore - a.voteScore).map((c) => (
                    <CommentContainer key={c.id}
                        comment={c}
                    />
                ))}

                <EditCommentContainer post={post} />
            </div>
        );
    }
}

function mapStateToProps({ comments }, ownProps) {
    return {
        comments: Object.keys(comments).reduce((arr, e) => {
            arr.push(comments[e]);
            return arr;
        }, []),
        post: ownProps.post
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        fetchComments: (postId) => dispatch(fetchComments(postId))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList);