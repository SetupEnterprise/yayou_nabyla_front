import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    filterBy = (nom) =>{
        
    }

    render() {
        return (
            <div className="card">
                <div className="card-header text-style">Flitrer par:</div>
                    <p className="text-center text-style card-text">
                        <a style= {{ cursor: 'pointer' }} className="filtre"
                            onClick={() => this.props.filterBy('prix')}>
                            Prix
                        </a> 
                    </p>
                    <p className="clearfix text-center text-style card-text">
                        <a style= {{ cursor: 'pointer' }} className="filtre"
                            onClick={() => this.props.filterBy('nom_marque') }>
                            Marques
                        </a>
                    </p>
                    <p className="text-center text-style card-text">
                        <a style= {{ cursor: 'pointer' }} className="filtre"
                            onClick={() => this.props.filterBy('version') }>
                            Modeles
                        </a>
                    </p>
                    <p className="text-center text-style card-text">
                        <a style= {{ cursor: 'pointer' }} className="filtre"
                            onClick={() => this.props.filterBy('nom')}>
                            Couleurs
                        </a>
                    </p>
                    <p className="text-center text-style card-text">
                        <a style= {{ cursor: 'pointer' }} className="filtre"
                            onClick={() => this.props.filterBy('annee_sortie') }>
                            Année
                        </a>
                    </p>
                    <img src="images/img_sidebar.png" className="img-fluid image-sidebar" alt="Image"/>
            </div>
        );
    }
}

export default Sidebar;