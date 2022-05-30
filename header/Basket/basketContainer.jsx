import { useDispatch, useSelector } from "react-redux"
import { BasketDeliteAC } from "../../redux/action.ts"
import { Basket } from "./basket.tsx"

export const BasketContainer =()=>{
    const data = useSelector(res=>res.BasketReducer.Basket)
    const dispatch=useDispatch()
   
    const delite=(id)=>{
        dispatch(BasketDeliteAC(id))
    }

    let allPrice = 0
    let allWithoutDiscount = 0
    let allDiscount = 0
    data.forEach(function(item) {
       allPrice += item.price
       allWithoutDiscount += item.discount
       allDiscount += item.discount - item.price
    });

    return(
        <Basket  data={data} allPrice={allPrice} allDiscount={allDiscount}
            allWithoutDiscount={allWithoutDiscount} delite={delite} />
    )
}