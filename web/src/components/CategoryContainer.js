import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';

class CategoryContainer extends Component {
    static propTypes = {
        cat: PropTypes.object.isRequired,
        posts: PropTypes.array.isRequired,
        sortBy: PropTypes.string.isRequired
    }

    render() {
        const { cat, posts, sortBy } = this.props;

        return (
            <div>
                <h1>{cat.name}</h1>
                {posts.filter((p) => !p.deleted && p.category === cat.name).sort((a,b) => b[sortBy] - a[sortBy]).map((p) => (
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

function mapStateToProps ({ posts, categories, sortBy }, ownProps) {
    return {
        posts: Object.keys(posts.list).reduce((arr, e) => {
            arr.push(posts.list[e]);
            return arr;
        }, []),
        sortBy: sortBy,
        cat: ownProps.cat ? ownProps.cat : ownProps.match ? categories[ownProps.match.params['categoryId']] : 'react'
    };
}

export default connect(mapStateToProps, null)(CategoryContainer);