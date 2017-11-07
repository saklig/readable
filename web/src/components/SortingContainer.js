import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { changeSorting } from '../actions/others';

class SortingContainer extends Component {
    static propTypes = {
        sortBy: PropTypes.string.isRequired,
        changeSorting: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = { };
    }

    handleSortChange = (event) => {
        this.props.changeSorting(event.target.value);
    }

    render() {
        const {sortBy} = this.props;
        const voteScore = 'voteScore';
        const timestamp = 'timestamp';

        return (
            <div className="card m-b-20 text-xs-center">                
                <div className="card-body">
                    <h4 className="card-title">Sorting</h4>
                    <select className="form-control col-lg-4" name="sortBy" onChange={(event) => this.handleSortChange(event)} value={sortBy}>
                        <option key={voteScore} value={voteScore}>{voteScore}</option>
                        <option key={timestamp} value={timestamp}>{timestamp}</option>
                    </select>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ sortBy }) {
    return {
        sortBy: sortBy
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        changeSorting: (sortBy) => dispatch(changeSorting(sortBy))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingContainer);