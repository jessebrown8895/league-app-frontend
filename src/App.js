import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PlayerCard from "./components/PlayerCard";
import PlayerForm from "./components/PlayerForm";
import UserProfile from "./components/UserProfile.js";
import PlayerContainer from './containers/PlayerContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header slogan="Lets play ball!" leagueName="Varsity Gay League" />
        <Switch>
          <Route path="/player/new">
            <PlayerForm />
          </Route>

          <Route path="/player/:id">
            <PlayerCard />
          </Route>

          <Route path="/player">
            <PlayerContainer />
          </Route>

          <Route path="/profile">
            <UserProfile />
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
