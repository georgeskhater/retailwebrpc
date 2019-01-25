import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddCutsomer from "../Customer/AddCustomer";
import SelectCustomer from "../Customer/SelectCustomer";
export default class Main extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/create/:lang" component={AddCutsomer} />
        <Route path="/search" component={SelectCustomer} />
      </Switch>
    );
  }
}
