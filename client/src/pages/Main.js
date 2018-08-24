import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

// Page Routes

const Main = () =>(
    <Router>
      
        <Route exact path="/" component={LandingPage} />
      
    </Router>
);
  
export default Main;