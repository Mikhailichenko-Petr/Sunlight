import React from "react"
import { useDispatch } from "react-redux"
import { BasketaAddAC } from "../../redux/action"
import uniqid from "uniqid"
import { Bio } from "./bio"

export const BioContainer = () => {
    const id =uniqid()
    const dispatch=useDispatch()
    const add_235978=()=>{
        dispatch(BasketaAddAC({id:id, name:'Золотые серьги. Артикул: 235978', price:17997,discount:59990, img:'https://g9.sunlight.net/media/products/19464f4715ff1acb701efc6716f214e043065062.jpg'}))
    }
    return(
        <Bio add_basket={add_235978} />
    )
}