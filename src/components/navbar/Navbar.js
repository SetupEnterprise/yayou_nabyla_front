import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    constructor() {
        super();
    }

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
                            <li className='nav-item active'>
                                <Link to="/accueil" url="/accueil">
                                    <a className="nav-link text-uppercase font-weight-bold" href="#" >Accueil </a>
                                </Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/achat" url="/achat">
                                    <a className="nav-link text-uppercase font-weight-bold" href="#" >Achat</a>
                                </Link>
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