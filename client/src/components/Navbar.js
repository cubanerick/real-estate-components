import React, { Component } from 'react';
import "./Navbar.css"


class Navbar extends Component {

    state = {
        style: "class"
    }

    toggleNav=()=>{
        
    }


    render(props){
        return(
        <div className="container">
            <div className="nav">
                <div className='row hamburger-row' >
                    <div className='col-sm-1'><img  className='hamburger' src="https://png.icons8.com/material-two-tone/40/000000/menu.png" onClick={this.toggleNav} /></div>
                    <div className='col-sm-11'></div>
                </div>
                <div className="row nav-row" style={this.state.style}>
                    <div className="col-sm-2 nav-link"><a onClick={()=>console.log("helloworld")} href="#">Home</a></div>
                    <div className="col-sm-2 nav-link"><a href="#">About</a></div>
                    <div className="col-sm-2 nav-link"><a href="#">Listings</a></div>
                    <div className="col-sm-2 nav-link"><a href="#">Properties</a></div>
                    <div className="col-sm-2 nav-link"><a href="#">Communities</a></div>
                    <div className="col-sm-2 nav-link"><a href="#">Contact</a></div> 
                </div>
            </div>
        </div>
        )}   
}

export default Navbar;