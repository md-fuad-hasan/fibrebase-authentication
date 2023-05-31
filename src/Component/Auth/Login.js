import { Formik } from "formik";
import React from "react";
import '../Auth/Auth.css';

const Login = ()=>{
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
                        console.log(values);
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
                        
                        console.log(errors);
                        return errors;
                    }
                }
               
            >
                {
                    ({values,errors,handleSubmit,handleChange})=>(
                        <div className="formContainer">
                            <h3 style={{textAlign:"center"}}>Login</h3>
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
                                
                                <button type="submit" className="btn btn-primary signup">Login</button>
                            </form>
                            <p style={{textAlign:"center"}}>Don't have an account? <a  href="/signup" style={{textDecoration:"none"}}>SignUp</a></p>

                        </div>
                    )
                }

            </Formik>

        </div>
    );
}

export default (Login);