import * as actionTypes from './actionType';
import axios from 'axios';

export const myName = (value)=>{
    return{
        type: actionTypes.NAME,
        payload: value
    }
    
}

const authSuccess =(token,userId)=>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        payload:{
            token:token,
            userId:userId
        }
    }
}

export const signupCompleted = ()=>{
    return{
        type:actionTypes.SIGNUP_COMPLETED
    }
}

export const signupSuccess = () =>{
    return{
        type:actionTypes.SIGNUP_SUCCESS 
    }
}

export const signup =(email,password)=>dispatch=>{
    const auth_data = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    const API_KEY = "AIzaSyDWA7CX5RveCbAmTci3UoOFiOlkOmMY6I8";

    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+API_KEY,auth_data)
        .then(res=>{
            console.log(res); 
            dispatch(signupSuccess());
           
        })
        .catch(err=>console.log(err))


}

export const login =(email,password)=>dispatch=>{
    const auth_data = {
        email: email,
        password: password,
        returnSecureToken: true
    }
    const API_KEY = "AIzaSyDWA7CX5RveCbAmTci3UoOFiOlkOmMY6I8";

    axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+API_KEY,auth_data)
        .then(res=>{
            const idToken = res.data.idToken;
            const localId = res.data.localId;
            const expirationTime = new Date(new Date().getTime()+ res.data.expiresIn *1000);
            dispatch(authSuccess(idToken,localId));
            localStorage.setItem('token',idToken);
            localStorage.setItem('userId',localId);
            localStorage.setItem('expirationTime',expirationTime);
            console.log(res);
        })
        .catch(err=>console.log(err))


}

export const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');

    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheck = () =>dispatch=>{
    const token = localStorage.getItem('token');
    if(!token){
        logout();
    }else{
        const expirationTime = localStorage.getItem('expirationTime');
        if(expirationTime < new Date()){
            logout();
        }else{
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token,userId));
        }
    }
}