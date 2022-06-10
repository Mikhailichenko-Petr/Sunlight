import { getDog } from "../API/api";
import { ImageDogAC } from "./action";
import { IMAGE_DOG } from "./types";

export const getAkitaThunkCreator = () => {
    return async (dispatch) => {   
            const response = await getDog.AkitaDog()
            dispatch(ImageDogAC(response.data.message));    
    }
}
export const getHoundThunkCreator = () => {
    return async (dispatch) => {   
            const response = await getDog.HoundDog()
            console.log(response);
            dispatch(ImageDogAC(response.data.message));    
    }
}


const initialState ={
    Images: false
}

export const BurgerReducer=(state = initialState,action)=>{
    console.log(action.data,'burger');
    console.log(state,'stateBurger');
    switch(action.type){
        case IMAGE_DOG:
            return{
                Images: action.data

            }  
        
        default:
            return state
    }
}