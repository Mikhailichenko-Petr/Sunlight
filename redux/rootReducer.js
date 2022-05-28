import { combineReducers } from "redux";
import { NavReducer } from "./navReducer.ts"
import { BasketReducer } from "./basketReducer.ts"
import { DeliveryReducer } from "./deliveryReducer.ts";

export const rootReducer= combineReducers({
    NavReducer,
    BasketReducer,
    DeliveryReducer
})

// type RootReducerType = typeof rootReducer
// export type AppStoreType = ReturnType<RootReducerType>