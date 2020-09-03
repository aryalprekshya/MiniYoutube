import React from "react";
import Home from "./Home";
import VideoDetail from "./VideoDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoList from "./VideoList";

function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={VideoDetail} />
      </Switch>
    </Router>
  );
}

export default Index;
