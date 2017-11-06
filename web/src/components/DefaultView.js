import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryContainer from './CategoryContainer';
import CategoryLinkContainer from './CategoryLinkContainer';

class DefaultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: null
        };
    }

    render() {
        const { categories } = this.props;
        
        return (
            <div className="m-t-15">
                <CategoryLinkContainer />

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
    };
    return propsObject;
}
  
function mapDispatchToProps (dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DefaultView);