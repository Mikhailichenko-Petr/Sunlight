import { DELIVERY_ADD } from "./types";

const initialState={
    Header: '',
    text: ''
}

export const DeliveryReducer=(state = initialState,action)=>{
    console.log(action,'delivery');
    switch(action.type){
        case DELIVERY_ADD:
            
            return{
                ...state,
                text: action.text,
                Header: action.header
            }
        default:
            return state
    }
}