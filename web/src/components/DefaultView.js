import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryContainer from './CategoryContainer';
import CategoryLinkContainer from './CategoryLinkContainer';
import SortingContainer from './SortingContainer';
import { resetForm } from '../actions/form';
import { changeSorting } from '../actions/others';

class PostOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null
        };
    }

    componentDidMount(){
        const { resetForm } = this.props;
        resetForm();
    }

    render() {
        const { categories } = this.props;
        
        return (
            <div className="m-t-15">
                <CategoryLinkContainer />

                <SortingContainer />

                {categories.map((cat) => (
                    <CategoryContainer
                        key={cat.name}
                        cat={cat}
                    />
                ))}
            </div>
        );
    }
}

function mapStateToProps ({ form, posts, categories, comments, sortBy }) {
    const propsObject = {
        posts: Object.keys(posts.list).reduce((arr, e) => {
            arr.push(posts.list[e]);
            return arr;
        }, []),
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, []),
        comments: Object.keys(comments).reduce((arr, e) => {
            arr.push(comments[e]);
            return arr;
        }, []),
        isPostAdded: form.postAdded,
        sortBy: sortBy
    };
    return propsObject;
}
  
function mapDispatchToProps (dispatch) {
    return {
        resetForm: () => dispatch(resetForm()),
        changeSorting: (sortBy) => dispatch(changeSorting(sortBy))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostOverview);