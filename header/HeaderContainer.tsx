import React, { useState } from "react"
import { useSelector } from "react-redux";
import { Order_status } from "../Order_status/Order_status";
import { Header } from "./header";
import { InitialState } from "../redux/basketReducer";

type BasketType={
    BasketReducer: InitialState
}

export const HeaderContainer= () => {

    const [isModal, setModal] = useState<boolean>(false)
    const Basket=useSelector((res:BasketType)=>res.BasketReducer.Basket.length)
    
    return(
        <div>
            <Header  setModal={setModal} Basket={Basket} />
            <Order_status isVisible={isModal} onClose={() => setModal(false)} />
        </div>
    )
}