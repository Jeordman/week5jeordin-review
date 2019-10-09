import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import CarPage from "./components/CarPage/CarPage";
import SpecificCar from "./components/SpecificCar/SpecificCar";

//This component is a standard routes.js component
//you may have weird errors if you do not use 'exact path'
//if you use a : in a route it allows dynamic routing

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/CarPage" component={CarPage} />
    <Route exact path="/CarPage/:car" component={SpecificCar} />
  </Switch>
);
