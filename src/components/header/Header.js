import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { path } = this.props;
        return (
            <>
                {
                    path === '/achat' ?
                    <div className="card-header text-style">
                        Voiture en vente
                    </div> :
                    <div className="card-header text-style">
                        Nouvelle arrivage
                    </div> 
                }
            </>
        );
    }
}

export default Header;