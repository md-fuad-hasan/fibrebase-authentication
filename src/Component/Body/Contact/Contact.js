import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import { myName } from "../../../redux/actionCreators";



const Contact = (props) =>{
    const [trigger,setTrigger] = useState(true);
    const navigate = useNavigate();
    const name = useSelector(state=>state.name);
    const dispatch = useDispatch();
    

    const handleNavigate = () =>{
        navigate("/about");
    }

    const changeName = ()=>{

        setTrigger(!trigger);

    }

    useEffect(()=>{
        (trigger) ? dispatch(myName('Fuad')): dispatch(myName('Hasan'));

    })

    

    return(
        <div>
            <p>Contact Page</p>
            <Button className="btn btn-success" onClick={handleNavigate}>Go About</Button>
            <Button className="btn btn-success" onClick={changeName}>Change Name</Button>
            <h3> My name is {name}</h3>
        </div>
    );
}

export default Contact;