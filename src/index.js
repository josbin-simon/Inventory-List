import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxProvider from './configureRedux';
import { ROUTES } from './Routes.constants';
import { CommonUtils } from './utils/commonUtils';
import AddItem from './Routes/AddItem';
import ListItems from './Routes/ListItems';
import RemoveItem from './Routes/RemoveItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import LandingPage from './Routes/LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <Switch>
          <LandingPage />
        </Switch>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
