import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import Datatable from "./pages/Datatable";
import StislaApp from "./layouts/StislaApp";

function App() {
  return (
    <div id="app">
      <Router>
        <Switch>
          {/* <Route path="/datatable">
            <Datatable />
          </Route>
          <Route path="/table">
            <Table />
          </Route> */}
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <StislaApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
