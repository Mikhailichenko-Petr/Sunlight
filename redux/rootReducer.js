import { combineReducers } from "redux";
import { likesReducer } from "./likesReducer";
import { TitleReducer } from "./TitleReducer";
import { CommentsReducer } from "./commentsReducer"
import { LoaderReducer } from "./loaderReducer"
import { NavReducer } from "./navReducer"
import { BasketReducer } from "./basketReducer.ts"
import { DeliveryReducer } from "./deliveryReducer";
export const rootReducer= combineReducers({
    likesReducer,
    TitleReducer,
    CommentsReducer,
    LoaderReducer,
    NavReducer,
    BasketReducer,
    DeliveryReducer
})