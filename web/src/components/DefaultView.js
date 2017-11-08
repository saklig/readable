import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryContainer from './CategoryContainer';
import CategoryLinkContainer from './CategoryLinkContainer';
import SortingContainer from './SortingContainer';
import { resetForm } from '../actions/form';

class PostOverview extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        resetForm: PropTypes.func.isRequired
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

function mapStateToProps ({ categories }, ownProps) {
    const propsObject = {
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, [])
    };
    return propsObject;
}
  
function mapDispatchToProps (dispatch) {
    return {
        resetForm: () => dispatch(resetForm())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostOverview);