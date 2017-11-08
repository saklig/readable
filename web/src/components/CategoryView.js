import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryContainer from './CategoryContainer';
import CategoryLinkContainer from './CategoryLinkContainer';
import SortingContainer from './SortingContainer';

class CategoryOverview extends Component {
    static propTypes = {
        cat: PropTypes.object.isRequired
    }

    render() {
        const { cat } = this.props;

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

function mapStateToProps ({ categories }, ownProps) {
    return {
        cat: ownProps.cat ? ownProps.cat : categories[ownProps.match.params['categoryId']]
    };
}

export default connect(mapStateToProps, null)(CategoryOverview);