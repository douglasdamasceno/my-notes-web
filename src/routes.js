import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import NotesIndex from "./pages/notes/index";
import UserEdit from "./pages/users/edit";

import PrivateRouter from "../src/components/auth/private_router";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRouter exact path="/notes" component={NotesIndex} />
      <PrivateRouter exact path="/users/edit" component={UserEdit} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
