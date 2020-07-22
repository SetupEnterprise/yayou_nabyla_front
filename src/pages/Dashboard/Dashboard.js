import React, { Component } from 'react';
import './Dashboard.css';
import Voiture from '../../components/voiture/Voiture';
import axios from 'axios';
import { BASE_URL } from '../../../src/Config';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import Banniere from '../../components/banniere/Banniere';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            automobiles: [],
            loading: false,
            url: ''
        }
    }

    componentDidMount(){
        this.getPriorite();
    }

    getAutomobiles(){
        //Chargement de la page avant arrivee des donnees dans la base
        this.setState({ loading: true });
        //Requete base de données
        axios.get(`${BASE_URL}/api/automobiles`)
        .then(
            response => {
                const { data } = response;

                if(data.status === 'success') {
                    let automobiles = data.automobiles;
                    this.setState({ automobiles, loading: false });
                }
            },

            error => {
                console.log('erreur', error);
            }
        );
    }

    getPriorite = (priorite) =>{
        this.setState({ url: priorite, loading: true });
        //Requete base de données
        if (priorite === 'achat') {
            this.getAutomobiles();
        } else {
            axios.get(`${BASE_URL}/api/getPriorite/1`)
            .then(
                response => {
                    const { data } = response;
                    if(data.status === 'success') {
                        let automobiles = data.automobiles;
                        this.setState({ automobiles, loading: false });
                    }
                },

                error => {
                    console.log('erreur', error);
                }
            );
        }
        
    }

    filterBy = (name) =>{
        this.setState({ loading: true });
        //Requete base de données
        axios.get(`${BASE_URL}/api/filterBy/${name}`)
        .then(
            response => {
                const { data } = response;
                if(data.status === 'success') {
                    let automobiles = data.automobiles;
                    this.setState({ automobiles, loading: false });
                }
            },

            error => {
                console.log('erreur', error);
            }
        );
        
    }

    render() {
        const { automobiles, loading, url } = this.state;

        return (
            <>
                <div className="container-fluid">
                    {/* NavBar ici */}
                    <div>
                        <Navbar getPriorite={this.getPriorite}/>
                    </div>
                    {/* Banniere ici */}
                    <div>
                        <Banniere/>
                    </div>
                    <div className="row" >
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-8 sidebar-style">
                            {/* SideBar ici */}
                            <Sidebar filterBy={ this.filterBy }/>
                        </div>                    
                        {/* Contenue page */}
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                            <div className="card">
                                {/* Contenue page ici */}
                                {
                                    url === 'achat' ?
                                        <div className="card-header text-style">
                                            Voiture en vente
                                        </div> 
                                    :
                                        <div className="card-header text-style">
                                            Nouvel arrivage
                                        </div> 
                                }
                                <div className="card-body">
                                    <div className="row mt-2">
                                        {
                                            loading ? 
                                            <div className="col-12 text-center">
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
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Footer/>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Dashboard;