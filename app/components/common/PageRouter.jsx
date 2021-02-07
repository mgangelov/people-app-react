import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChartsPage from '../ChartsPage';
import TablePage from '../TablePage';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/charts'>
        <ChartsPage testString='charty' />
      </Route>
      <Route path='/table'>
        <TablePage testString='tableau' />
      </Route>
    </Switch>
  </BrowserRouter>
);
