import React from "react"
import style from "./Order_status.module.css"
export const Order_status =()=>{
    return(
        <div className={style.Order_status}>
           <h1>узнать статус заказа</h1> 
            <h2>номер заказа из смс</h2>
            <input type="text" placeholder="номер заказа из смс" />
            <button>Продолжить</button>
        </div>
    )
}