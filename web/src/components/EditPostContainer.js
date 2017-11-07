import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { addPost, fetchPost, updatePost } from '../actions/posts';
import { resetForm, updatePostForm } from '../actions/form';


class EditPostContainer extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        postId: PropTypes.string.isRequired,
        post: PropTypes.object.isRequired,
        isPostAdded: PropTypes.bool.isRequired,
        isPostUpdated: PropTypes.bool.isRequired,
        addPost: PropTypes.func.isRequired,
        fetchPost: PropTypes.func.isRequired,
        updatePostForm: PropTypes.func.isRequired,
        resetForm: PropTypes.func.isRequired,
        updatePost: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    componentDidMount(){
        const { resetForm, postId, fetchPost, post } = this.props;
        if(postId && !post.id){
            fetchPost(postId);
        }
        else{
            resetForm();
        }
    }

    handleInputChange = (event) => {
        const { post } = this.props;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.props.updatePostForm(name, value, post);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { post, addPost, postId, updatePost } = this.props;

        if (postId && post.id) {
            updatePost(post);
        } else {
            addPost({post: {            
                id: uuid(),
                timestamp: Date.now(),
                title: post.title,
                body: post.body,
                author: post.author,
                category: post.category,
                voteScore: 1,
                deleted: false
            }});
        }
    }



    render() {
        const { post, categories, isPostAdded, isPostUpdated } = this.props;

        if (isPostAdded || isPostUpdated) {
            return (
                <Redirect to={{pathname: '/'}} />
            );
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card m-b-20 text-xs-center m-t-15 m-l-10">
                    <div className="card-body">
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Title</label>
                            <div className="col-10">                                
                                {<input type="text" className="form-control col-lg-4" placeholder="title" name="title" value={post.title} onChange={(event) => this.handleInputChange(event)} />}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-2 col-form-label">Author</label>
                            <div className="col-10">
                                {<input type="text" className="form-control col-lg-4" placeholder="name" name="author" value={post.author} onChange={(event) => this.handleInputChange(event)} />}
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-2 col-form-label">Body</label>
                            <div className="col-10">
                                {<textarea className="form-control col-lg-4" placeholder="text" rows="4" name="body" value={post.body} onChange={(event) => this.handleInputChange(event)} />}
                            </div>
                        </div>
                    
                        <div className="form-group row">
                            <label className="col-2 col-form-label">Category</label>
                            <div className="col-10">
                                <select className="form-control col-lg-4" name="category"
                                    onChange={(event) => this.handleInputChange(event)}
                                    value={post.category}
                                >
                                    {categories.map((cat) => (
                                        <option key={cat.name}
                                            value={cat.name}
                                        >{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            <span className="mdi mdi-plus" /> {post.id ? 'Edit post' : 'Add post'}
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

function mapStateToProps ({ form, categories }, ownProps) {
    return {
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, []),
        postId: ownProps.match.params.postId || '',
        post: form.post,
        isPostAdded: form.postAdded,
        isPostUpdated: form.postUpdated
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        addPost: (post) => dispatch(addPost(post)),
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        updatePostForm: (name, value, post) => dispatch(updatePostForm(name, value, post)),
        resetForm: () => dispatch(resetForm()),
        updatePost: (post) => dispatch(updatePost(post))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPostContainer);