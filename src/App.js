import './App.scss';
import React from 'react';
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Tab from '@material-ui/core/Tab';

import PotCook from './pages/pot_cook/potCook';
import Financial from './pages/financial/financial';
import LifePlanner from './pages/life_planner/lifePlanner';
import Rpg from './pages/rpg/rpg';
import Tabs from '@material-ui/core/Tabs';

const routes = [
  ['/financial', 'Financial', <Financial />],
  ['/pot-cook', 'Pot Cook', <PotCook />],
  ['/rpg', 'RPG Game', <Rpg />],
  ['/life-planner', 'Life Planner', <LifePlanner />],
  ['/', 'Home', <h1>idk</h1>]]

const tabs = () => {
  let routesCopy = [...routes];
  routesCopy.unshift(routesCopy.pop())
  return routesCopy;
}

const TabPanel = ({location}) => {
  return (
    <>
      <Tabs value={location.pathname}>
        {tabs().map(
          ([path, label, ]) => (
            <Tab
              label={label}
              value={path}
              to={path}
              key={path}
              component={Link} />))}
      </Tabs>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path="/"
        render={x => <TabPanel {...x} />}/>
      <Switch>
        {routes.map(([path, , component]) => (
          <Route
            path={path}
            key={path}>
            {component}</Route>))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
