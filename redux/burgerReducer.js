import { ImagesAPI } from "../API/api";
import { ImageDogAC } from "./action";
import { IMAGE_DOG } from "./types";

export const AuthThunkCreator = () => {
    return async (dispatch) => {   
            const response = await ImagesAPI.ImagesDog()
            dispatch(ImageDogAC(response.data.message));    
    }
}



const initialState ={
    Images: []
}

export const BurgerReducer=(state = initialState,action)=>{
    console.log(action.data,'burger');
    switch(action.type){
        case IMAGE_DOG:
            return{
                ...state,
                Basket: [...state.Images,action.data]
            }  
        
        default:
            return state
    }
}