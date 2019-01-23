import React, { Component } from "react";
import AddCutsomer from "../Customer/AddCustomer";
import { Switch, Route } from "react-router-dom";
export default class Main extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Switch>
        <Route path="/create" component={AddCutsomer} />
      </Switch>
    );
  }
}
