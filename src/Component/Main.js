import React, { useEffect } from "react";
import Navigation from "./Navbar/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import Contact from "./Body/Contact/Contact";
import About from "./Body/About/About";
import Landing from "./Body/Landing/Landing";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./Auth/Logout";
import { authCheck, signupCompleted } from "../redux/actionCreators";

const Main =()=>{
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const newSignUp = useSelector(state=>state.signupSuccess);
    useEffect(()=>{
        
        dispatch(authCheck());
        // const signupSuccess = localStorage.getItem('signupSuccess');
        // console.log(signupSuccess);
        // if(signupSuccess){
        //     navigate('/login');
        //     localStorage.removeItem('signupSuccess');
        // }
        if(newSignUp){
            navigate('/login');
        }
        dispatch(signupCompleted());
    })

   
   
    const token = useSelector(state=>state.token);



    let root = null;
    if(token===null){
        root = <Routes>
                
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />

    </Routes>
    }else{
        root = <Routes>
                
        <Route path="/home" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/home" />} />

    </Routes>
    }

    return(
        <div>
            <Navigation />

            {root}

        </div>
    );
    
}


export default Main;