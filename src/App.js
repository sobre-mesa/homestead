import React from 'react';
import { Counter } from './features/counter/Counter';
import SecondImpact from './pages/second_impact/SecondImpact';
import PotCook from './pages/pot_cook/potCook';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Sheet from './pages/char_sheet/sheet';
import './App.scss';

const NavBar = props => {
  return (
      <ul className="nav-bar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pot-cook">Pot Cook</Link>
        </li>
        <li>
          <Link to="/second-impact">Second Impact</Link>
        </li>
        <li>
          <Link to="/character-sheet">Life Planner</Link>
        </li>
      </ul>
  )
}

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/second-impact">
            <SecondImpact />
          </Route>
          <Route path="/pot-cook">
            <PotCook />
          </Route>
          <Route path="/character-sheet">
            <Sheet />
          </Route>
          <Route path="/">
            <h1>Idk lol </h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
