import { rootReducer } from "./rootReducer"

type RootReducerType = typeof rootReducer
export type AppStoreType = ReturnType<RootReducerType>