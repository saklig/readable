import React, { Component } from 'react';
import {connect} from 'react-redux';
import CategoryContainer from './CategoryContainer';
import CategoryLinkContainer from './CategoryLinkContainer';
import SortingContainer from './SortingContainer';

class CategoryOverview extends Component {
    state = {  }

    render() {
        const {cat} = this.props;

        return (
            <div className="m-t-15">
                <CategoryLinkContainer />

                <SortingContainer />

                <CategoryContainer
                    cat={cat}
                />
            </div>
        );
    }
}

function mapStateToProps ({ posts, categories, sortBy }, ownProps) {
    const propsObject = {
        posts: Object.keys(posts.list).reduce((arr, e) => {
            arr.push(posts.list[e]);
            return arr;
        }, []),
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, []),
        sortBy: sortBy,
        cat: ownProps.cat ? ownProps.cat : categories[ownProps.match.params['categoryId']]
    };
    return propsObject;
}
  
function mapDispatchToProps (dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);