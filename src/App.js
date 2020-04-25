import './App.scss';

import React from 'react';
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Tab from '@material-ui/core/Tab';

import PotCook from './pages/pot_cook/potCook';
import SecondImpact from './pages/second_impact/SecondImpact';
import Sheet from './pages/char_sheet/sheet';
import Tabs from '@material-ui/core/Tabs';

const routes = [
  ['/second-impact', 'Second Impact', <SecondImpact />],
  ['/pot-cook', 'Pot Cook', <PotCook />],
  ['/character-sheet', 'Character Sheet', <Sheet />],
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
