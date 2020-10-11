import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import ResourceRegister from "./pages/ResourceRegister";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forget-password" component={ForgotPassword} />
        <Route exact path="/resource-register" component={ResourceRegister} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
