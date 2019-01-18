import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from '../components/Fotter';

import main from '../pages/main';

const Routes = (props) => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={main} />
      </Switch>

      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default Routes;
