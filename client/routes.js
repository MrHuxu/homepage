import React from 'react';
import { Switch, Route } from 'react-router';

import Home from './components/home';
import NoMatch from './components/404';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route component={ NoMatch } />
    </Switch>
  );
};
