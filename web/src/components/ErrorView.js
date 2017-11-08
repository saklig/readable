import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ErrorView extends Component {
    static propTypes = {
        errorMessage: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                Post not found
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    return {
        errorMessage: ownProps.errorMessage
    };
}

export default connect(mapStateToProps, null)(ErrorView);