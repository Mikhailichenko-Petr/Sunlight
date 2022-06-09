// import { ActionsTypes } from './action';
// import { REMOVE_USER, SET_USER } from "./types";

// type AuthReducerType={
//     isLoaded: boolean
//     user: null|string,
//     token: null|string,
//     setUser: ()=>void,
//     setToken: ()=>void,
//     logOut: ()=>void
// }
// const initialState: AuthReducerType ={
//     isLoaded: false,
//     user: null,
//     token: null,
//     setUser: () => {},
//     setToken: () => {},
//     logOut: () => {},
// }

// export const AuthReducer=(state = initialState,action:ActionsTypes):AuthReducerType=>{
//     switch(action.type){
//         case SET_USER:
//             return{
//                 token: action.token,
//                 user: action.user,
//                 isLoaded: action.isLoaded
//             }  
//         case REMOVE_USER:
//                 return{
//                     ...state,
//                     email: null,
//                     token: null,
//                     id: null
//                 }  
//         default:
//             return state
//     }
// }