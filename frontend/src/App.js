import React, { useEffect } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ImgView from "./components/Imgupload";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Navbar";
import Response from "./components/Response";
// import { LinkedInPopUp } from "react-linkedin-login-oauth2";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/upload" component={ImgView} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/response" component={Response} />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/linkedin" component={LinkedInPopUp} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
