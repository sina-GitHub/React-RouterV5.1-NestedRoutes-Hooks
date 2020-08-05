import React from "react";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

import Home from "./Home";
import Topics from "./Topics";

export default () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/topics"> - Topics</Link>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </Router>
  );
};
