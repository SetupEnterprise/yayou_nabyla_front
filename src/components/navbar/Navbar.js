import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src="images/yayounabyla.png" width="30" height="30" className="img-fluid" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link text-uppercase font-weight-bold" href="#">Accueil </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase font-weight-bold" href="#">Achat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase font-weight-bold" href="#">Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase font-weight-bold" href="#">à propos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-uppercase font-weight-bold" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;