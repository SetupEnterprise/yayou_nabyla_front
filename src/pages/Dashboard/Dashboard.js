import React, { Component } from 'react';
import './Dashboard.css';
import Voiture from '../../components/voiture/Voiture';
import Header from '../../components/header/Header';
import axios from 'axios';
import { BASE_URL } from '../../../src/Config';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            url: '',
            automobiles: [],
            loading: false,
            nbre_pages: 0,
            nbre_auto: 0
        }
    }

    componentDidMount(){
        this.gerUrl();
        //Chargement de la page avant arrivee des donnees dans la base
        this.setState({ loading: true });
        //Requete base de données
        axios.get(`${BASE_URL}/api/automobiles`)
        .then(
            response => {
                const { data } = response;

                if(data.status === 'success') {
                    let automobiles = data.automobiles;
                    if (data.nbre_auto > 6 ) {
                        this.setState({ nbre_pages : data.nbre_auto / 6 });
                    }
                    this.setState({ automobiles, loading: false, nbre_auto: data.nbre_auto });
                }
            },

            error => {
                console.log('erreur', error);
            }
        );
    }

    gerUrl = () =>{
        this.setState({ url: window.location.href})
    }

    render() {
        const { url, automobiles, loading, nbre_pages, nbre_auto } = this.state;

        return (
            <>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                    <div className="card">
                       <Header path={ url }/>
                        <div className="card-body">
                            <div className="row mt-2">

                                {
                                    loading ? 
                                    <div className="d-flex justify-content-center text-center">
                                        <div className="spinner-border spinner-color" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div> :
                                    automobiles.map((auto, key) => 
                                        <Voiture value={ auto } />
                                    )
                                }

                            </div>
                        </div>
                        {
                            nbre_auto <= 6 ? '' :
                                <div className="card-footer py-2">
                                    <nav aria-label="...">
                                        <ul className="pagination justify-content-end">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link"> ... </a></li>
                                            <li className="page-item"><a className="page-link" href="#">{ nbre_pages > 1 ? Math.floor(nbre_pages + 1) : '' }</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;