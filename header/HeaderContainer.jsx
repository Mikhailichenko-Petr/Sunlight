import React, { FC, useState } from "react"
import { useSelector } from "react-redux";
import { Order_status } from "../Order_status/Order_status";
import { Header } from "./header.tsx";





export const HeaderContainer= () => {

    const [isModal, setModal] = useState(false);//boolean
    const Basket=useSelector(res=>res.BasketReducer.Basket.length)//number
    
    
    return(
        <div>
            <Header  setModal={setModal} Basket={Basket} />
            <Order_status isVisible={isModal} onClose={() => setModal(false)} />
        </div>
    )
}