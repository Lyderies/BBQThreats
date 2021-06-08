import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Tim from "./Tim";
import Lucian from "./Lucian";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Lucian">Lucian</Link>
            </li>
            <li>
              <Link to="/Tim">Tim</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Tim">
            <Tim />
          </Route>
          <Route path="/Lucian">
            <Lucian />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
