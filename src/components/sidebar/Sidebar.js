import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header text-style">Flitrer par:</div>
                    <p className="text-center text-style card-text">Prix</p>
                    <p className="text-center text-style card-text">Marques</p>
                    <p className="text-center text-style card-text">Modèles</p>
                    <p className="text-center text-style card-text">Couleurs</p>
                    <p className="text-center text-style card-text">Année</p>
            </div>
        );
    }
}

export default Sidebar;