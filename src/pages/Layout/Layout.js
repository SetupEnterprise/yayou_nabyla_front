import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Banniere from '../../components/banniere/Banniere';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import './Layout.css';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    getPriorite = (priorite) =>{
        console.log('priorite', priorite);
    }

    filterBy = (nom) =>{
        
    }
    
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div>
                        <Navbar getPriorite={this.getPriorite}/>
                    </div>
                    <div>
                        <Banniere/>
                    </div>
                    <div className="row" >
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 ml-5 col-8 sidebar-style">
                            <Sidebar filterBy={ this.filterBy }/>
                        </div>                    
                        { this.props.children }
                    </div>
                    <div className="mt-5">
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;

if (document.getElementById('app')) {
    ReactDOM.render(<Layout />, document.getElementById('app'));
}
