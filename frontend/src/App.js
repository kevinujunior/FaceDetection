import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ImgView from "./components/Imgupload";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/imgupload" component={ImgView} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
