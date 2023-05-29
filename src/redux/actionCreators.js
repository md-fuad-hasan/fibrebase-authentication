
import * as actionTypes from './actionType';

export const myName = (value)=>{

    return{
        type: actionTypes.NAME,
        payload: value
    }
    
}