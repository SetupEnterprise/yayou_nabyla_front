import React, { Component } from 'react';

class Voiture extends Component {
    render() {
        return (
            <>
                <div className="card-body d-inline-block">{/* bg-light */}
                    <div class="card-columns">
                        <div class="card">
                            <h5 className="card-title bg-success text-center">Buggati</h5>
                            <img 
                                src="images/voiture_1.jpg" 
                                className="card-img-top img-voiture-style" alt="Voiture" />
                            <div className="card-body">
                                <h5 className="card-title bg-success text-center">45 000 000 fcfa</h5>
                                <p className="card-text">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Voiture;