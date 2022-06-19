import { FC } from "react"
import { UserType } from "../../../../../redux/type"
import img from "./img.png"
import style from "./Users.module.css"


type UsersType={
    State:UserType
}

export const Users:FC<UsersType>=({State})=>{
    
    return(
        <div className={style.product}>
                    {
                            State.map((res:UserType)=>{
                                return(
                                    <div className={style.icon}>
                                        <div>{res.name}</div>
                                        <img src={res.photos.small?res.photos.small:img} alt="icon_user" />
                                    </div>  
                                )
                            })
                    }
        </div>
    )
}