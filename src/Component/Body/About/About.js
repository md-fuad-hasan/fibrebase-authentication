import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

const About = () =>{
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1);
    }
    return(
        <div>
            <h2>About Page</h2>
            <Button className=" btn btn-success" onClick={handleNavigate}>Go Back</Button>


        </div>
    );
}

export default About;