
import * as actionTypes from './actionType';

const INITIAL_STATE = {
    name : "Fuad",
    token: null,
    userId: null,
    signupSuccess: false
}

export const reducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case actionTypes.NAME:
            return{
                name : action.payload
            }
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token: action.payload.token,
                userId: action.payload.userId
            }
        case actionTypes.AUTH_LOGOUT:
            return{
                ...state,
                token: null,
                userId: null
            }
        case actionTypes.SIGNUP_SUCCESS:
            return{
                ...state,
                signupSuccess:true
            }
        case actionTypes.SIGNUP_COMPLETED:
            return{
                ...state,
                signupSuccess:false
            }
        default:
            return state;
    }
}

