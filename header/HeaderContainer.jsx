import React, { useState } from "react"
import { Modal } from "./modal/modals/modal";
import { useSelector } from "react-redux";
import { Order_status } from "../Order_status/Order_status";
import { Header } from "./header";





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