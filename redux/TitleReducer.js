import { VALUE } from "./types";

const initialState={
    value: ''
}

export const TitleReducer=(state = initialState,action)=>{


    switch(action.type){
        case VALUE:
            return{
                ...state,
                value: action.payload
            } 
        default:
            return state
    }
    return state
}