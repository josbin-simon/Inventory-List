import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ReduxProvider from './configureRedux';
import { ROUTES } from './Routes.constants';
import { CommonUtils } from './utils/commonUtils';
import { LandingPage } from './Routes/LandingPage';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <Switch>
          <Route path={ROUTES.LANDING_PAGE} component={LandingPage} />
        </Switch>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
