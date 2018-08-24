import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import "./LandingPage.css";
import Navbar from "../components/Navbar"
class LandingPage extends Component {
render(props){
    return(
        <div className="wrapper">
            <Navbar></Navbar>
            <h1>Hello </h1>
            <p> Hey there</p>
            <p>jkhbljkhblkhjb</p>
            <Parallax
                className="lp1"
                offsetYMax={20}
                offsetYMin={-20}
                slowerScrollRate
                tag="figure"
            >
            <div className="LandingPage-Wrapper">
            <img src='https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
            </div>
            </Parallax>
        </div>
    );
}
}

export default LandingPage;