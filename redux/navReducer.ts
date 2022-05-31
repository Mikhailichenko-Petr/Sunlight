import { ActionsTypes } from './action';
import { NAV_IMG1, NAV_IMG2, NAV_IMG3, NAV_VIDEO } from "./types";

export interface NavReducerType {
    Image?:string
    video?:string
}


const initialState: NavReducerType = {
    Image: 'https://g9.sunlight.net/media/products/19464f4715ff1acb701efc6716f214e043065062.jpg',
    video: ''
}

export const NavReducer = (state = initialState, action:ActionsTypes):NavReducerType => {
    console.log(state,'Nav');
    switch (action.type) {
        case NAV_VIDEO:
            return {
                video: action.data
            }
        case NAV_IMG1:
            return {
                Image: action.data,
            }
        case NAV_IMG2:
            return {
                Image: action.data,
            }
        case NAV_IMG3:
            return {
                Image: action.data,
            }
        default:
            return state
    }
}