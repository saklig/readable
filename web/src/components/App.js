import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import NavContainer from './NavContainer';
import FooterContainer from './FooterContainer';
import DefaultView from './DefaultView';
import CategoryView from './CategoryView';
import EditPostContainer from './EditPostContainer';
import { fetchPosts } from '../actions/posts';
import EditCommentContainer from './EditCommentContainer';
import PostDetailView from './PostDetailView';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { };
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

                        <Route exact path="/category/:categoryId" component={CategoryView} />

                        <Route exact path="/posts/new" component={EditPostContainer} />

                        <Route exact path="/posts/edit/:postId" component={EditPostContainer} />

                        <Route exact path="/posts/detail/:postId" component={PostDetailView} />

                        <Route exact path="/comment/edit/:commentId" component={EditCommentContainer} />
                    </div>
                </div>

                <FooterContainer/>

            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {

    };
}
  
function mapDispatchToProps (dispatch) {
    const returnObj = {
        fetchPosts: () => dispatch(fetchPosts())
    };
    return returnObj;
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(App));
