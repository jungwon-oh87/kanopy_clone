import React from "react";
import HomePage from "./pages/home/home-page.component";
import SignUpPage from "./pages/sign-up/signup.component";
import FindLibPage from "./pages/find-lib/find-lib.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signup/find/library">
            <FindLibPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
