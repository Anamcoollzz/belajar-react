import React from "react";
import Stisla from "./Stisla";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import UserIndex from "../modules/users/Index";
import Dashboard from "../pages/Dashboard";

export default function StislaApp(props, context) {
  const match = useRouteMatch();
  // console.log(match);
  return (
    <Stisla>
      <Switch>
        <Route path={`${match.path}user`}>
          <UserIndex />
        </Route>
        <Route path={`${match.path}`}>
          <Dashboard />
        </Route>
      </Switch>
    </Stisla>
  );
}
