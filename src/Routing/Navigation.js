import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../Routing/Navigation.css";

import Todo from "../Components/Todo";
import HomeScreen from "../Screnn/HomeScreen";

export default function Navigation() {
  return (
    <Router>
      <div className="container">
        <div className="titleContainer">
          <div>
            <Link to="/">TASK WITH HOOKS</Link>
          </div>
          <div>
            <Link to="/about">TASK WITH REDUX</Link>
          </div>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
          <Route path="/about">
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
