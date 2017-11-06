import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class CategoryLinkContainer extends Component {
    state = {  }
    render() {
        const {categories} = this.props;
        return (
            <div className="card m-b-20 text-xs-center">                
                <div className="card-body">
                    <h4 className="card-title">Category links</h4>
                    {categories.map((cat) => {
                        return (
                            <Link key={cat.name} className="btn btn-primary m-r-10" to={{ pathname: `/category/${cat.name}`}}>{cat.name}</Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps ({categories}, ownProps) {
    return {
        categories: Object.keys(categories).reduce((arr, e) => {
            arr.push(categories[e]);
            return arr;
        }, [])
    };
}
  
function mapDispatchToProps (dispatch) {
    return {
        
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryLinkContainer);