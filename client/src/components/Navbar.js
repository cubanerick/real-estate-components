import React, { Component } from 'react';
import "./Navbar.css"


class Navbar extends Component {

    state = {
        style: "",
        dropDownToggle: "toggle"

    }

    componentDidMount() {
        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
      }
    

    resize = () => {
        if(window.innerWidth < 576){
            this.setState({
                style: "narrow"
            })
        }
        else{
            this.setState({
                style: null,
                dropDownToggle: ""
            })
        }
    }

    toggleNav=()=>{
        if(window.innerWidth > 576){
            this.setState({
                dropDownToggle: ""
            })
        }
        else{
            if(this.state.dropDownToggle === "toggle"){
                this.setState({
                    dropDownToggle: ""
                })
            }
            else{
                this.setState({
                    dropDownToggle: "toggle"
                })
            }
        }
    }


    render(props){
        return(
        <div className="container">
            <div className="nav">
                <div className={`row hamburger-row ${this.state.style}`}>
                    <div className='col-sm-1'><img  className={`hamburger ${this.state.style}`} src="https://png.icons8.com/material-two-tone/40/000000/menu.png" onClick={this.toggleNav} /></div>
                    <div className='col-sm-11'></div>
                </div>
                <div className="row nav-row">
                    <div className = {`col-sm-2 nav-link ${this.state.dropDownToggle}`} onClick={this.toggleNav}><a href="#">Home</a></div>
                    <div className = {`col-sm-2 nav-link ${this.state.dropDownToggle}`} onClick={this.toggleNav}><a href="#">About</a></div>
                    <div className = {`col-sm-2 nav-link ${this.state.dropDownToggle}`} onClick={this.toggleNav}><a href="#">Listings</a></div>
                    <div className = {`col-sm-2 nav-link ${this.state.dropDownToggle}`} onClick={this.toggleNav}><a href="#">Properties</a></div>
                    <div className = {`col-sm-2 nav-link ${this.state.dropDownToggle}`} onClick={this.toggleNav}><a href="#">Communities</a></div>
                    <div className = {`col-sm-2 nav-link ${this.state.dropDownToggle}`} onClick={this.toggleNav}><a href="#">Contact</a></div> 
                </div>
            </div>
        </div>
        )}   
}

export default Navbar;