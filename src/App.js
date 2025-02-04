import React from "react";
import "./App.css";
import Main from "./Main";
import { Route, Switch } from "react-router-dom";
import RouterBirthday from "./RouterBirthday";
import Generate from "./Generate";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          exact
          path="/birthday/:name?/:day?/:month?"
          component={RouterBirthday}
        />
        <Route exact path="/generate" component={Generate} />
      </Switch>
    </div>
  );
}

export default App;
