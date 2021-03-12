import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './components'
import { 
  HomePage, 
  CitizenPage,
  ContactPage,
} from './pages';
import LoginPage from './pages/Login/LoginPage'
import ServicePage from './pages/Service/ServicePage';
import TaxPage from './pages/Tax/TaxPage'
import history from './history'

import './App.css'

function App() {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/tax" component={TaxPage} />
          <Route exact path="/citizen" component={CitizenPage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Redirect to="/" />          
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
