import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './components'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
