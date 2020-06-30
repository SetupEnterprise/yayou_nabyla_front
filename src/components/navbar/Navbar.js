import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <>
                <div className="border sticky-top">
                    <img src="images/yayounabyla.png" className="image-logo"/>
                    <ul className="nav justify-content-end mr-5">
                        <li className="nav-item">
                            <a className="nav-link  link-style active" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  link-style" href="#">ACHAT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  link-style" href="#">LOCATION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  link-style" href="#">A PROPOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  link-style" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Navbar;