import React, { Component } from 'react';

class FooterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {( new Date() ).getFullYear()} © Frank Rogneslien (Udacity Readable project)
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterContainer;