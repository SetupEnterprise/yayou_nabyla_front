import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Banniere from '../../components/banniere/Banniere';
import Sidebar from '../../components/sidebar/Sidebar';
import Voiture from '../../components/voiture/Voiture';
import Footer from '../../components/footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Router>
                <Banniere/>
                <Navbar/>
                <div className="row mt-3">
                    <div className="col-md-2 ml-5">
                        <Sidebar/>
                    </div>                    
                    { this.props.children }
                </div>
                <div className="mt-5">
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default Layout;

if (document.getElementById('app')) {
    ReactDOM.render(<Layout />, document.getElementById('app'));
}
