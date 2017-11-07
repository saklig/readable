import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <header id="topnav">
                <div className="topbar-main">
                    <div className="container-fluid">
                        <div className="logo">
                            <Link className='logo' to='/'>
                                <span className="logo-small"><i className="mdi mdi-radar" /></span>
                                <span className="logo-large"><i className="mdi mdi-radar" /> Readable</span>
                            </Link>
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>

                <div className="navbar-custom">
                    <div className="container-fluid">
                        <div id="navigation">
                            <ul className="navigation-menu">
                                <li className="has-submenu">
                                    <Link to='/'>
                                        <i className="ti-home" />Home
                                    </Link>
                                </li>

                                <li className="has-submenu">
                                    <Link to='/posts/new'>
                                        <i className="ti-plus" />New post
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavContainer;