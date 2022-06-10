import { useSelector } from "react-redux"
import style from "./New.module.css"

export const New=()=>{
    const State=useSelector(res=>res.BurgerReducer.Images)
    console.log(State);
    
    return(
        <div>
           <img src="https://g6.sunlight.net/media/catbans/b7d927a561ef4382cb6db85d5d948dc537d97e41.jpg" alt="" />
           <div className={style.product}>
           {
                State.map(res=>{
                    return(
                        <div className={style.icon}><img src={res} alt="" /></div>
                    )
                })
           }
           </div>
        </div>
    )
}