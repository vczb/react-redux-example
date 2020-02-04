import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home   from './pages/home';
import Reserv from './pages/reserv';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Home}  />
      <Route path="/reserv" exact component={Reserv}  />
    </Switch>
  );
}
