// import { COMMENTS, COMMENTS_UPDATE, COMMENTS_DELITE, COMMENTS_LOAD } from "./types";

// const initialState={
//     comments: []
// }

// export const CommentsReducer=(state = initialState,action)=>{
//     switch(action.type){
//         case COMMENTS:
//             return{
//                 ...state,
//                 comments: [...state.comments, action.payload]
//             } 
            
//         case COMMENTS_LOAD:
//             const commentsNew = action.data.map(res => {
//                 return {
//                     text: res.name,
//                     id: res.id
//                 }
//             })
//             return {
//                 ...state,
//                 comments: commentsNew
//             }
//         case COMMENTS_UPDATE:
//             const data = action.payload
//             const comments=state.comments
//             const itemIndex = comments.findIndex(res => res.id === data.id)
//             const nextComments = [
//                 ...comments.slice(0,itemIndex),
//                 data,
//                 ...comments.slice(itemIndex+1)
//             ]
//             return{
//                 ...state,
//                 comments: nextComments
//             } 
//         case COMMENTS_DELITE:
            
//             return(()=>{
//             const id = action.id
//             const comments=state.comments
//             const itemIndex = comments.findIndex(res => res.id === id)
//             const nextComments = [
//                 ...comments.slice(0,itemIndex),
//                 ...comments.slice(itemIndex+1)
//             ]
//             return{
//                 ...state,
//                 comments: nextComments
//             } 
//             })()  
//         default:
//             return state
//     }

// }