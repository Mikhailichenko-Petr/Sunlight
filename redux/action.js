import {COMMENTS_LOAD, NAV_IMG2, NAV_IMG1, NAV_IMG3, NAV_VIDEO, BASKET_ADD, BASKET_DELITE, DELIVERY_ADD } from "./types";



export function CommentLoadAC(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const json = await response.json()
        dispatch({
            type: COMMENTS_LOAD,
            data:json
        })
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

////////////// basket
export function BasketaAddAC(data) {
    return {
      type: BASKET_ADD,
      data
    }
}
export function BasketDeliteAC(id) {
    return {
      type: BASKET_DELITE,
      id
    }
}

////////////// delivery
export function DeliveryAddAC(text,header) {
    return {
      type: DELIVERY_ADD,
      text,
      header
    }
}