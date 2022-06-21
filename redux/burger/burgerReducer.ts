import { ActionsTypes } from "../type";
import { GET_USERS, SET_PAGE, TOGGLE_FETCHING } from "./burgerType";


type BurgerReducerTypes={
    Users:Array<string>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean
}

const initialState:BurgerReducerTypes ={
    Users:[],
    pageSize:9,
    totalUsersCount: 90,
    currentPage:1,
    isFetching:false
}

export const BurgerReducer=(state = initialState,action:ActionsTypes):BurgerReducerTypes=>{
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
        case TOGGLE_FETCHING:{
            return{
                ...state,
                isFetching: action.isFetching
            } 
        }
        default:
            return state
    }
}

