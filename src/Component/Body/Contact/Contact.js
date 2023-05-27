import React from "react";
import {  useNavigate, } from "react-router";
import { Button } from "reactstrap";

const Contact = (animate) =>{

    const navigate = useNavigate();

  

    const handleNavigate = () =>{
        navigate("/about");
    }

    return(
        <div>
            <p>Contact Page</p>
            <Button className="btn btn-success" onClick={handleNavigate}>Go About</Button>
        </div>
    );
}

export default Contact;