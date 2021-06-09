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
        <div className="bg-gray-300 w-full">
          <div className="w-full min-h-screen container mx-auto bg-gray-300">
            <Route exact path="/users/:id">
              <UserProfile></UserProfile>
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/phones">
              <Phones></Phones>
            </Route>
            <Route exact path="/orders">
              <Orders></Orders>
            </Route>
            <Route exact path="/">
              <Landing></Landing>
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
