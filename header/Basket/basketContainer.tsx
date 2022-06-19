import { useDispatch, useSelector } from "react-redux"
import { BasketDeliteAC } from "../../redux/basket/backetAction"
import { Product } from "../../redux/basket/basketReducer"

import { Basket } from "./basket"

export const BasketContainer =()=>{
    const data = useSelector((res:any)=>res.BasketReducer.Basket)
    const dispatch=useDispatch()
   
    const delite=(id:string)=>{
        dispatch(BasketDeliteAC(id))
    }

    let allPrice = 0
    let allWithoutDiscount = 0
    let allDiscount = 0
    data.forEach(function(item:Product) {
       allPrice += item.price
       allWithoutDiscount += item.discount
       allDiscount += item.discount - item.price
    });

    return(
        <Basket  data={data} allPrice={allPrice} allDiscount={allDiscount}
            allWithoutDiscount={allWithoutDiscount} delite={delite} />
    )
}