import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import NotesIndex from "./pages/notes/index";
import UserEdit from "./pages/users/edit";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/notes" component={NotesIndex} />
      <Route exact path="/users/edit" component={UserEdit} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
