import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from '../src/pages/Dashboard/Dashboard';
/* import Layout from '../src/pages/Layout/Layout'; */

class App extends Component {  

  /* On définit ici l'ensembles des chemins (Route) */
  renderRoutes = () => (
    <>
      <Route path="/" component={ Dashboard }/>
    </>
  )
  render() {
    return (
      <Router>
        <Switch>
            <Route component={({ match }) =>
              this.renderRoutes()
            }/>
        </Switch>
      </Router>
    );
  }
}

export default App;