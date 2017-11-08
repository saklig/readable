import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CategoryLinkContainer extends Component {
    static propTypes = {
        categories: PropTypes.array.isRequired
    }

    render() {
        const { categories } = this.props;
        return (
            <div className="card m-b-20 text-xs-center">                
                <div className="card-body">
                    <h4 className="card-title">Category links</h4>
                    {categories.map((cat) => {
                        return (
                            <Link key={cat.name} className="btn btn-primary m-r-10" to={{ pathname: `/${cat.name}`}}>{cat.name}</Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ categories }, ownProps) {
    return {
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, [])
    };
}

export default connect(mapStateToProps, null)(CategoryLinkContainer);