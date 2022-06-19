import { FC } from "react"
import { UserType } from "../../../../../redux/type"
import style from "./Users.module.css"
type MapType={
    map:(res:any)=>any
}

type UsersType={
    State:MapType
}

export const Users:FC<UsersType>=({State})=>{
    
    return(
        <div className={style.product}>
                    {
                            State.map((res:UserType)=>{
                                return(
                                    <div className={style.icon}>{res.name}</div>
                                )
                            })
                    }
        </div>
    )
}