
import { usersAPI } from "../API/api";
import { GetUsersAC } from "./action";
import { GET_USERS, SET_PAGE } from "./types";


export const getUsersThunkCreator = (currentPage, pageSize) => {

    return async (dispatch) => {
            const response = await  usersAPI.getUsers(currentPage, pageSize);
            dispatch(GetUsersAC(response.items));
    }
}


const initialState ={
    Users:[],
    pageSize:5,
    totalUsersCount: 21,
    currentPage:1
}

export const BurgerReducer=(state = initialState,action)=>{
    console.log(action.data,'burger');
    console.log(state,'stateBurger');
    switch(action.type){
        case GET_USERS:
            return{
                Users: action.data

            }  
        case SET_PAGE:{
            return{
                ...state,currentPage: action.data
            }
        } 
        default:
            return state
    }
}

