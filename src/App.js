import React from "react";
import HomePage from "./pages/home/home-page.component";
import SignUpPage from "./pages/sign-up/signup.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
