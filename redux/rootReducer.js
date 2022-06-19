import { combineReducers } from "redux";
import { NavReducer } from "./nav/navReducer.ts"
import { BasketReducer } from "./basket/basketReducer.ts"
import { DeliveryReducer } from "./delivery/deliveryReducer.ts"
import { BurgerReducer } from "./burger/burgerReducer"


export const rootReducer= combineReducers({
    NavReducer,
    BasketReducer,
    DeliveryReducer,
    BurgerReducer

})

