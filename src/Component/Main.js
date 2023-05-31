import React from "react";
import Navigation from "./Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router";
import Contact from "./Body/Contact/Contact";
import About from "./Body/About/About";
import Landing from "./Body/Landing/Landing";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";

const Main =()=>{
        return(
            <div>
                <Navigation />

                <Routes>
                    
                    <Route path="/home" element={<Landing />} />
                    <Route path="/contact" element={<Contact animate={true}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/home" />} />

                </Routes>


            </div>
        );
    
}


export default Main;