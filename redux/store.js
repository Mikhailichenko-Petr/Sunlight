import { nav_reducer } from "./nav_reducer"

import { combineReducers, createStore } from "redux";

// let sotore={
    
//     _state(){
//         nav_image={
//             id:1,
//             img:"https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg"
//         }
//     },
//     dispatch(action){
//         this._state.nav_image = nav_reducer(this._state.nav_image, action)
//     }
// }
let reducers = combineReducers({
    nav_reducer
})

export const Store = createStore(reducers)