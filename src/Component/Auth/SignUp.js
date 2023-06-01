import { Formik } from "formik";
import React from "react";
import '../Auth/Auth.css';
import { useDispatch } from "react-redux";
import { signup } from "../../redux/actionCreators";

const SignUp = ()=>{
    const dispatch = useDispatch();
    return(
        <div className="all">
            <Formik
                initialValues={
                   {
                        email:"",
                        password: "",
                        confirmedPassword:""
                   }
                }
                onSubmit={
                    (values)=>{
                        dispatch(signup(values.email,values.password));
                    }
                }
                validate={
                    (values)=>{
                        const errors = {}
                        if(!values.email){
                            errors.email = "Required";
                        }
                        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                            errors.email = "Invalid Email Address";
                        }
                        if(!values.password){
                            errors.password = "Required";
                        }
                        else if(values.password.length<8){
                            errors.password = "At least 8 character"
                        }
                        if(!values.confirmedPassword){
                            errors.confirmedPassword = "Required";
                        }
                        else if(values.password !== values.confirmedPassword){
                            errors.confirmedPassword = "Password doesn't match"
                        }
                        return errors;
                    }
                }
               
            >
                {
                    ({values,errors,handleSubmit,handleChange})=>(
                        <div className="formContainer">
                            <h3 style={{textAlign:"center"}}>Sign Up</h3>
                            <form onSubmit={handleSubmit} className="form">
                                <input 
                                    
                                    name="email"
                                    className="form-control" 
                                    placeholder="Enter Your Email" 
                                    value={values.email} 
                                    onChange={handleChange} 
                                />
                                <span className="show-error">{errors.email}</span>
                                <br/>
                                <input 
                                    name="password"
                                    type="password"
                                    className="form-control" 
                                    placeholder="Enter Password" 
                                    value={values.password} 
                                    onChange={handleChange} 
                                />
                                <span className="show-error">{errors.password}</span>
                                <br/>
                                <input 
                                    name="confirmedPassword"
                                    type="password"
                                    className="form-control" 
                                    placeholder="Confirm Password" 
                                    value={values.confirmedPassword} 
                                    onChange={handleChange} 
                                />
                                <span className="show-error">{errors.confirmedPassword}</span>
                                <br/>
                                <button type="submit" className="btn btn-primary signup">Sign Up</button>
                            </form>
                            <p style={{textAlign:"center"}}>Already have an account? <a href="/login" style={{textDecoration:"none"}}>Login</a></p>
                        </div>
                    )
                }

            </Formik>

        </div>
    );
}

export default (SignUp);