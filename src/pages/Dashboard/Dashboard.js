import React, { Component } from 'react';
import './Dashboard.css';
import Voiture from '../../components/voiture/Voiture';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                    <div className="card">
                        <div className="card-header text-style">
                            Voiture sur le marché
                        </div>
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