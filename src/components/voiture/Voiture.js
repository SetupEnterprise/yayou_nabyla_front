import React, { Component } from 'react';
import './Voiture.css';

class Voiture extends Component {
    render() {
        const { path } = this.props;

        return (
            <>
                <div className="col-md-4">
                    <div className="card-body bg-light mb-3">
                        <h5 className="card-title couleur-text text-center">Buggati</h5>
                        <img 
                            src="images/voiture_1.jpg" 
                            className="card-img-top img-voiture-style img-fluid tooltip-test"
                            title="Cliquez pour voir"
                            alt="Voiture"
                            data-toggle="modal"
                            data-target="#staticBackdrop" />
                            <h5 className="mt-2 card-title bg-couleur text-white text-center">45 000 000 fcfa</h5>
                    </div>
                </div>
                {/* Modal ici */}
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Marque et model</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Carousel */}
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="images/voiture_1.jpg" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="images/voiture_1.jpg" className="d-block w-100" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="images/voiture_1.jpg" className="d-block w-100" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </div>
                                {/* Carousel fin */}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Voiture;