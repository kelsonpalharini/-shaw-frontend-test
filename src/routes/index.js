import React from "react";
import { Switch } from 'react-router-dom';

import Route from './Route';
import Main from '../pages/Main';
import Details from "../pages/Details";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/detail" exact component={Details} />
    </Switch>
  )
}
