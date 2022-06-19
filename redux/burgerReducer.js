
import { GET_USERS, SET_PAGE } from "./types";


const initialState ={
    Users:[],
    pageSize:9,
    totalUsersCount: 90,
    currentPage:1
}

export const BurgerReducer=(state = initialState,action)=>{
    console.log(action.data,'burger');
    console.log(state,'stateBurger');
    switch(action.type){
        case GET_USERS:
            return{
                ...state,
                Users:[...action.data]
            }  
        case SET_PAGE:{
            return{
                ...state,
                currentPage: action.data
            }
        } 
        default:
            return state
    }
}

