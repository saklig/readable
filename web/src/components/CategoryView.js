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

    constructor(props) {
        super(props);
        this.state = { };
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
  
function mapDispatchToProps (dispatch) {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryOverview);