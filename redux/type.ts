
import { rootReducer } from "./rootReducer"

export type UserType={
    followed:boolean,
    id:number,
    name:string,
    photos:{small:string|null,large:string|null}
    status:string|string
    uniqueUrlName:string|null
}

type RootReducerType = typeof rootReducer
export type AppStoreType = ReturnType<RootReducerType>