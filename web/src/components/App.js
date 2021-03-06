import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavContainer from './NavContainer';
import FooterContainer from './FooterContainer';
import DefaultView from './DefaultView';
import CategoryView from './CategoryView';
import EditPostView from './EditPostView';
import { fetchPosts } from '../actions/posts';
import EditCommentView from './EditCommentView';
import PostDetailView from './PostDetailView';

class App extends Component {
    static propTypes = {
        fetchPosts: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="App">
                
                <NavContainer />

                <div className="wrapper">
                    <div className="container-fluid">
                        <Route exact path="/" component={DefaultView} />

                        <Route exact path="/posts/new/post" component={EditPostView} />
                        
                        <Route exact path="/:categoryId" component={CategoryView} />

                        <Route exact path="/posts/edit/:postId" component={EditPostView} />

                        <Route exact path="/:categoryId/:postId" component={PostDetailView} />

                        <Route exact path="/comment/edit/:commentId" component={EditCommentView} />
                    </div>
                </div>

                <FooterContainer/>

            </div>
        );
    }
}
  
function mapDispatchToProps (dispatch) {
    return {
        fetchPosts: () => dispatch(fetchPosts())
    };
}

export default withRouter(connect(
    null,
    mapDispatchToProps
)(App));
