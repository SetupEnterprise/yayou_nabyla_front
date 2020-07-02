import React, { Component } from 'react';
import './Dashboard.css';
import Voiture from '../../components/voiture/Voiture';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    /* componentDidMount(){
        let { path } = window.location.pathname;
        this.setState({ path });
        console.log('path', path);
    } */

    render() {
        let { path } = this.props;

        return (
            <>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                    <div className="card">
                        {
                            path === '/accueil' || path === '/' ?
                            <div className="card-header text-style">
                                Nouvelle arrivage
                            </div> :
                            <div className="card-header text-style">
                                Voiture en vente
                            </div>
                        }
                        <div className="card-body">
                            <div className="row mt-2">
                                <Voiture/>
                                <Voiture/>
                                <Voiture/>
                                <Voiture/>
                                <Voiture/>
                                <Voiture/>
                            </div>
                        </div>
                        <span className="text-center">
                            <a href="#" className="glyphicon glyphicon-backward">Page Précédente</a>
                            <span>...</span>
                            <a href="#">
                                <span className="glyphicon glyphicon-chevron-right">Page Suivante</span>
                            </a>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;