
import * as actionTypes from './actionType';

const INITIAL_STATE = {
    name : "Fuad"
}

export const reducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case actionTypes.NAME:
            return{
               
                name : action.payload
               
            }
        default:
            return state;
    }
}

