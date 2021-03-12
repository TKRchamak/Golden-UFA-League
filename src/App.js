import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import TeamDetail from "./Components/TeamDetail/TeamDetail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="/team/:teamId">
          <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/">
          <Header></Header>
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
