import React from "react";
import "./Navbar.css"

const Navbar = (props) => (
    <div className="container">
    
         
        <div className="row">
            <div className="nav">
                <div className="col-sm-2"><a onClick={()=>console.log("helloworld")} href="#">Home</a></div>
                <div className="col-sm-2"><a href="#">About</a></div>
                <div className="col-sm-2"><a href="#">Listings</a></div>
                <div className="col-sm-2"><a href="#">Properties</a></div>
                <div className="col-sm-2"><a href="#">Communities</a></div>
                <div className="col-sm-2"><a href="#">Contact</a></div> 
            </div>
            
        </div>
        
    
    </div>
    
)

export default Navbar;