import React from "react";
import './App.css'
import './../components/nav/Nav'
import Nav from "./../components/nav/Nav";
import Home from "./../components/home/Home"

export default props =>
    <div className="app ">
        <Nav></Nav>
        <Home></Home>
    </div>