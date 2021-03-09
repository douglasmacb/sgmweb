import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home, Navbar, Footer } from './components'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
