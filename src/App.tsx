import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from './components'
import { HomePage, LoginPage } from './pages';
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
