import 'core-js/stable';

import React from 'react';
import { render } from 'react-dom';

import { Routes } from './routes';

import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

render(
  <Router history={ history }>
    <Routes />
  </Router>,
  document.getElementById('homepage')
);
