

import PageNotFound from "components/NotFound";
import React from "react";
import { Switch, Route } from "react-router-dom";
import ResetPass from "../components/login/ResetPass";
import Forget from "./Forget";
import Login from "./Login";

const Public = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/forget">
          <Forget />
        </Route>
        <Route exact path="/password-reset">
          <ResetPass />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Public;