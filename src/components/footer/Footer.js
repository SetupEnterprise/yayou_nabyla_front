import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="border footer-size">
                    <div className="banniere-footer">
                        <h5 className="ml-2">Laissez-nous un message</h5>
                        <form className="ml-2">
                            <div class="form-group">
                              <input type="email" className="form-control" name="" placeholder="Adresse E-mail" />
                            </div>
                            <div class="form-group">
                              <textarea className="form-control" name="" rows="3" placeholder="Votre message ici"></textarea>
                            </div>
                            <button type="submit" class="btn btn-block btn-couleur">Envoyer</button>
                        </form>
                    </div>
                    <img src="images/bannierefooter.png" className="img-fluid" alt="Image footer" />
                    <div className="bg-footer clearfix">
                        <div className="clearfix">
                            <img src="images/yayounabyla.png" className="img-fluid float-right img-footer" />
                        </div>
                        <blockquote className="blockquote text-center text-white">
                            <p className="mb-0">
                                
                            </p>
                            <footer className="blockquote-footer text-dark">Développé par <cite>7Tup Entreprise © 2020</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;