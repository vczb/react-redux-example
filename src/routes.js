import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Reserved from './pages/reserved';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home}  />
      <Route path="/reserved" exact component={Reserved}  />
    </Switch>
  );
}
