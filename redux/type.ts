

import { BasketAddType, BasketDelteType } from "./basket/backetAction"
import { GetUsersType, SetPageType } from "./burger/BurgerAction"
import { DeliveryAddType } from "./delivery/deliveryAction"
import { Nav1Type, Nav2Type, Nav3Type, NavVideoType } from "./nav/navAction"
import { rootReducer } from "./rootReducer"

export type ActionsTypes = Nav1Type|Nav2Type|Nav3Type|NavVideoType|BasketAddType|BasketDelteType|DeliveryAddType|GetUsersType|SetPageType

export type UserType={
    followed:boolean,
    id:number,
    name:string,
    photos:{small:string|null,large:string|null}
    status:string|string
    uniqueUrlName:string|null
    map?:any
}

type RootReducerType = typeof rootReducer
export type AppStoreType = ReturnType<RootReducerType>