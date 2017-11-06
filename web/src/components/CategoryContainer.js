import React, { Component } from 'react';
import {connect} from 'react-redux';
import PostContainer from './PostContainer';

class CategoryContainer extends Component {
    state = {  }

    render() {
        const {cat,posts} = this.props;

        return (    
            <div>
                <h1>{cat.name}</h1>
                {posts.filter((p) => !p.deleted && p.category === cat.name).sort((a,b) => b['voteScore'] - a['voteScore']).map((p) => (
                    <div className="row" key={p.id}>
                        <div className="col-lg-12">
                            <div className="card m-b-20 text-xs-center">
                                <PostContainer
                                    post={p}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

function mapStateToProps ({ form, posts, categories, comments, sortBy }, ownProps) {
    const propsObject = {
        posts: Object.keys(posts.list).reduce((arr, e) => {
            arr.push(posts.list[e]);
            return arr;
        }, []),
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, []),
        cat: ownProps.cat
    };
    return propsObject;
}
  
function mapDispatchToProps (dispatch) {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);