import React from 'react';
import { Counter } from './features/counter/Counter';
import SecondImpact from './pages/second_impact/SecondImpact';
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
          <Link to="/life-planner">Life Planner</Link>
        </li>
      </ul>
  )
}

const App = () => {
  return (
    <div>
      <Sheet/>
    </div>
  );
}

export default App;
