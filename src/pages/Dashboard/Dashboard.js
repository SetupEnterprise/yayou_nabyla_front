import React, { Component } from 'react';
import './Dashboard.css';
import Voiture from '../../components/voiture/Voiture';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="col-md-9 mr-5">
                    <div className="card">
                        <div className="card-header text-style">
                            Voiture sur le marché
                        </div>
                        <Voiture/>
                        <Voiture/>
                        <Voiture/>

                        <h2>Nombre de pages</h2>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;