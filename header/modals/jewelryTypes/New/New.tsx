import { FC } from "react"
import style from "./New.module.css"
import { Users } from "./Users/Users"
import { UserType } from "../../../../redux/type"
type NewType={
    State:UserType
    PageSize:number,
    totalUsersCount:number,
    CurrentPage:number,
    onPageChanget:(arg:number)=>void
}
export const New:FC<NewType>=({State,PageSize,totalUsersCount,CurrentPage,onPageChanget})=>{
    const pageCount= Math.ceil(totalUsersCount/PageSize)
    const pages = []
    for(let i=1;i<=pageCount;i++){
        pages.push(i)
    }
    return(
        <div>
             <div className={style.page}>
                    {pages.map(p=>(
                        //@ts-ignore
                            <span key={p} className={CurrentPage===p&&style.number}
                            onClick={()=>{onPageChanget(p)}}>{p}</span>
                    ))}
            </div>
            <img src="https://g6.sunlight.net/media/catbans/b7d927a561ef4382cb6db85d5d948dc537d97e41.jpg" alt="" />
            <Users State={State} />
        </div>
    )
}