import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importando as páginas e componentes.
import main from '../pages/main';
import Footer from '../components/footer';

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
