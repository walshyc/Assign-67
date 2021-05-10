import './App.css';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Phones from './components/Phones';
import Orders from './components/Orders';
import Landing from './components/Landing';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route excat path="/users/:id">
          <UserProfile></UserProfile>
        </Route>
        <Route excat path="/users">
          <Users />
        </Route>
        <Route excat path="/phones">
          <Phones></Phones>
        </Route>
        <Route excat path="/orders">
          <Orders></Orders>
        </Route>
        <Route path="/">
          <Landing></Landing>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
