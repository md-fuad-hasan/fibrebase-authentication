import React, { Component } from "react";
import Navigation from "./Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router";
import Contact from "./Body/Contact/Contact";
import About from "./Body/About/About";
import Landing from "./Body/Landing/Landing";

class Main extends Component{
    render(){
        return(
            <div>
                <Navigation />

                <Routes>
                    
                    <Route path="/home" element={<Landing />} />
                    <Route path="/contact" element={<Contact animate={true} hi="Hello"/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/home" />} />

                </Routes>


            </div>
        );
    }
}


export default Main;