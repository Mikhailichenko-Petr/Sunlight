import { useSelector } from "react-redux"
import style from "./New.module.css"

export const Neckleace=()=>{

    
    return(
        <div>
           <img src="https://g6.sunlight.net/media/catbans/34ff0c171c69de811e17f84af78850378db54c19.jpg" alt="" />
           <div className={style.product}>
           {/* {
                State.map(res=>{
                    return(
                        <div className={style.icon}><img src={res} alt="" /></div>
                    )
                })
           } */}
           </div>
        </div>
    )
}