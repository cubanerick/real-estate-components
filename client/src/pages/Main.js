import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

// Page Routes

const Main = () =>(
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
      </div>
    </Router>
);
  
export default Main;