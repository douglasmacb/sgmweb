import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './components'
import Authentication from './components/Auth/Authentication';
import Authorization from './components/Auth/Authorization';
import LoginPage from './pages/Login/LoginPage'
import ServicePage from './pages/Service/ServicePage';
import Logout from './components/Logout/Logout';
import TaxPage from './pages/Tax/TaxPage'
import history from './history'
import { 
  HomePage, 
  CitizenPage,
  ContactPage,
  ServiceCreatedPage,
  ProtocolPage,
  DashboardPage
} from './pages';
import './App.css'

function App() {

  const AdminRole = Authorization(['Admin']);
  const dashboardPage = Authentication(AdminRole(DashboardPage))

  Authentication(DashboardPage)

  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/tax" component={TaxPage} />
          <Route exact path="/citizen" component={CitizenPage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/service/created" component={ServiceCreatedPage} />
          <Route exact path="/protocol" component={ProtocolPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/dashboard" component={dashboardPage} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/" />          
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
