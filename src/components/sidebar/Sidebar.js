import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header text-style">Flitrer par:</div>
                    <p className="text-center text-style card-text">
                        <Link to="/prix">Prix</Link> 
                    </p>
                    <p className="text-center text-style card-text">Marques</p>
                    <p className="text-center text-style card-text">Modèles</p>
                    <p className="text-center text-style card-text">Couleurs</p>
                    <p className="text-center text-style card-text">Année</p>
                    <img src="images/img_sidebar.png" className="img-fluid image-sidebar" alt="Image"/>
            </div>
        );
    }
}

export default Sidebar;