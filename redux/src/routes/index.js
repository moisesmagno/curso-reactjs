import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import main from '../pages/main';

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
