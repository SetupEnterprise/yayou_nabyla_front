import React, { Component } from 'react';
import './Dashboard.css';
import Voiture from '../../components/voiture/Voiture';
import Header from '../../components/header/Header';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            url: ''
        }
    }

    componentDidMount(){
        this.gerUrl();
    }

    gerUrl = () =>{
        //this.setState({ url: window.location.pathname })
        //this.setState({ url: this.props.location.pathname })
        this.setState({ url: window.location.href})
    }

    render() {
        const { url } = this.state;
        console.log('url', url);
        

        return (
            <>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12">
                    <div className="card">
                       <Header path={ url }/>
                        <div className="card-body">
                            <div className="row mt-2">

                                <Voiture />
                                <Voiture />
                                <Voiture />
                                <Voiture />
                                <Voiture />
                                <Voiture />

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