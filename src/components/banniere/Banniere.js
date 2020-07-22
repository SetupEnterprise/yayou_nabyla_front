import React, { Component } from 'react';
import './Banniere.css';

class Banniere extends Component {
    render() {
        return (
            <div className="border banniere-size mb-3">
                <span className="font-banniere">
                    Yayou Nabyla <br/>
                    <span className="font-banniere-small">Automobile</span>
                </span>
                <img src="images/banniere.png" className="img-fluid" alt="Baninere"/>
            </div>
        );
    }
}

export default Banniere;