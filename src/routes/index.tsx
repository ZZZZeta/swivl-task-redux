import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { UserList } from '../pages/users/UserList';
import { User } from '../pages/users/User';

const Router = () => (
  <BrowserRouter basename={window.location.pathname || ''}>
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/user/:username" component={User} />
    </Switch>
  </BrowserRouter>
);

export default Router;
