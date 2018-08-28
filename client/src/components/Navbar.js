import React from "react";
import "./Navbar.css"

const Navbar = (props) => (
    <div className="container">
            <div className="nav">
            {/* <div className='row hamburger-row'>
                <div className='col-sm-1'><img  className='hamburger' src="https://png.icons8.com/material-two-tone/40/000000/menu.png"/></div>
                <div className='col-sm-11'></div>
            </div> */}
            <div className="row">
                <div className="col-sm-2"><a href="#">Home</a></div>
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