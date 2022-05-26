import { DELIVERY_ADD } from "./types";

type ActionType={
    type:string
    text:string
    header:string
}

type InitialState={
    Header:string
    text:string
}

const initialState: InitialState={
    Header: 'Text',
    text: 'описание'
}

export const DeliveryReducer=(state:InitialState = initialState,action:ActionType)=>{
    console.log(action,'delivery');
    switch(action.type){
        case DELIVERY_ADD:String:
            return{
                ...state,
                text: action.text,
                Header: action.header
            }
        default:
            return state
    }
}