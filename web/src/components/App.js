import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import NavContainer from './NavContainer';
import FooterContainer from './FooterContainer';
import DefaultView from './DefaultView';
import CategoryView from './CategoryView';
import { fetchPosts } from '../actions/posts';

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
            </div>
        </div>

        <FooterContainer/>

      </div>
    );
  }
}

function mapStateToProps ({ posts, categories }) {
    return {
        posts: Object.keys(posts).reduce((arr, e) => {
            arr.push(posts[e]);
            return arr;
        }, []),
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, [])
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
