import { DISLIKE, LIKE,
        VALUE,COMMENTS,
        COMMENTS_UPDATE,
        COMMENTS_DELITE,
        COMMENTS_LOAD,
        LOADER, LOADER_END, NAV_IMG2, NAV_IMG1, NAV_IMG3, NAV_VIDEO } from "./types";


export function LikesAC(){
    return{
        type: LIKE
    }
}
export function DislikesAC(){
    return{
        type: DISLIKE
    }
}
export function ValueAC(text){
    return{
        type: VALUE,
        payload : text
    }
}
export function CommentAC(text,id){
    return{
        type: COMMENTS,
        payload : {text,id}

    }
}
export function CommentUpdateAC(text,id){
    return{
        type: COMMENTS_UPDATE,
        payload : {text,id}

    }
}
export function CommentDeliteAC(id){

    return{
        type: COMMENTS_DELITE,
        id : id
    }
}
export function loaderOn() {
    return {
      type: LOADER
    }
  }
export function loaderOff() {
    return {
      type: LOADER_END
    }
  }
export function CommentLoadAC(){
    return async dispatch => {
        dispatch(loaderOn())
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const json = await response.json()
        dispatch({
            type: COMMENTS_LOAD,
            data:json
        })
        dispatch(loaderOff())
    }
}

///////////// nav
export function NavVideo(data) {

    return {
      type: NAV_VIDEO,
      data
    }
}
export function Nav1AC(data) {

    return {
      type: NAV_IMG1,
      data
    }
}
export function Nav2AC(data) {

    return {
      type: NAV_IMG2,
      data
    }
}
export function Nav3AC(data) {
    return {
      type: NAV_IMG3,
      data
    }
}