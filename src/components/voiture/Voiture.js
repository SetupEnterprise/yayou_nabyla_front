import React, { Component } from 'react';
import './Voiture.css';

class Voiture extends Component {
    render() {
        return (
            <>
                <div className="col-md-4">
                    <div className="card-body bg-light mb-3">
                        <h5 className="card-title couleur-text text-center">Buggati</h5>
                        <img 
                            src="images/voiture_1.jpg" 
                            className="card-img-top img-voiture-style img-fluid" alt="Voiture" />
                            <h5 className="mt-2 card-title bg-couleur text-white text-center">45 000 000 fcfa</h5>
                    </div>
                </div>
            </>
        );
    }
}

export default Voiture;