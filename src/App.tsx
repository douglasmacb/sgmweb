import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './components'
import { HomePage } from './pages';
import LoginPage from './pages/Login/LoginPage'
import './App.css'

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Redirect to="/" />          
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
