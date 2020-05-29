import React from "react";
import { Route, Redirect } from "react-router-dom";

const privateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      //fazer ir na api e compare o token
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

export default privateRoute;
