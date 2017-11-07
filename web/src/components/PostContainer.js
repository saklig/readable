import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostActions from './PostActions';
import { ToReadableDate } from '../utils/DateHelper';

class PostContainer extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        const { post } = this.props;

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
                    </div>
                </div>
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
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);