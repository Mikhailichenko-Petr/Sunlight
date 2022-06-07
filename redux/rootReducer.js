import { combineReducers } from "redux";
import { NavReducer } from "./navReducer.ts"
import { BasketReducer } from "./basketReducer.ts"
import { DeliveryReducer } from "./deliveryReducer.ts"
import { BurgerReducer } from "./burgerReducer"
import { AuthReducer } from "./authReducer"

export const rootReducer= combineReducers({
    NavReducer,
    BasketReducer,
    DeliveryReducer,
    BurgerReducer,
    AuthReducer
})

