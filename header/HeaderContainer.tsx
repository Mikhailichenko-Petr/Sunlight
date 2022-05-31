import React, { useState } from "react"
import { useSelector } from "react-redux";
import { Order_status } from "../Order_status/Order_status";
//@ts-ignore
import { Header } from "./header.tsx";
import { BasketReducerType} from "../redux/basketReducer";



export const HeaderContainer= () => {

    const [isModal, setModal] = useState<boolean>(false)
    const data:BasketReducerType=useSelector((res:any)=>res.BasketReducer.Basket.length)
    
    return(
        <div>
            <Header  setModal={setModal} data={data} />
            <Order_status isVisible={isModal} onClose={() => setModal(false)} />
        </div>
    )
}