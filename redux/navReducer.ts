import { NAV_IMG1, NAV_IMG2, NAV_IMG3, NAV_VIDEO } from "./types";

interface InitialState2 {
    Image:string
    video:string
}

type ActionType={
    type:string
    data:string
}



const initialState: InitialState2 = {
    Image: 'https://g9.sunlight.net/media/products/19464f4715ff1acb701efc6716f214e043065062.jpg',
    video: ''
}

export const NavReducer = (state:InitialState2 = initialState, action:ActionType) => {
    console.log(action,'Nav');
    switch (action.type) {
        case NAV_VIDEO:
            return {
                ...state,
                Image: null,
                video: action.data
            }
        case NAV_IMG1:
            return {
                ...state,
                Image: action.data
            }
        case NAV_IMG2:
            return {
                ...state,
                Image: action.data
            }
        case NAV_IMG3:
            return {
                ...state,
                Image: action.data
            }
        default:
            return state
    }
}