import React from "react";
import { Switch, Route } from "react-router-dom";

import StreamList from "./components/StreamList";
import StreamCreate from "./components/StreamCreate";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/new" exact component={StreamCreate} />
    </Switch>
  );
};

export default Routes;
