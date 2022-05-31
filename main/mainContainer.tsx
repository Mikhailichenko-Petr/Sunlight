import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BasketaAddAC } from "../redux/action"
import { Main } from "./main"
import uniqid from "uniqid"

import { NavReducerType } from "../redux/navReducer"

type MainContainerType={
    NavReducer:NavReducerType
}

export const MainContainer = () => {
    const Image=useSelector((state:MainContainerType)=> state.NavReducer.Image)
    const Video=useSelector((state:MainContainerType)=> state.NavReducer.video)

    const dispath=useDispatch()




    const add_38141=()=>{
        dispath(BasketaAddAC({id:uniqid(), name:'Золотой браслет. Артикул: 38141', price:36740, discount:73480, img:'https://g1.sunlight.net/media/products/100d7b484989d7e826d41faa3e3d10972ee2b90a.jpg'}))
    }  
    const add_151996=()=>{
        dispath(BasketaAddAC({id:uniqid(), name:'Золотой браслет. Артикул: 151996', price:59070,discount:196990, img:'https://g2.sunlight.net/media/products/01010ab69387693aaab7a97989beb8e4c10e5585.jpg'}))
    }
    const add_108789=()=>{
        dispath(BasketaAddAC({id:uniqid(), name:'Золотое кольцо с фианитами. Артикул: 108789',price:13497, discount:44990, img:'https://g7.sunlight.net/media/products/993120b1b2794b1124ec7a4971a27ab94633e286.jpg'}))
    }
    const add_66267=()=>{
        dispath(BasketaAddAC({id:uniqid(), name:'Золотой кольцо с фианитами. Артикул: 66267', price:7497,discount:24990, img:'https://g5.sunlight.net/media/products/86e1c4af4c06c061af77693ed1d149c63e68ccc4.jpg'}))
    }
    const add_158125=()=>{
        dispath(BasketaAddAC({id:uniqid(), name:'Золотое кольцо с фианитами. Артикул: 158125',price:6245, discount:12490, img:'https://g7.sunlight.net/media/products/7056a22c0f8f33c034cac0e96dd7f72cc8de4915.jpg'}))
    }
    const add_285237=()=>{
        dispath(BasketaAddAC({id:uniqid(), name:'Золотые серьги с топазами и бриллиантами. Артикул: 285237', price:16990,discount:56633, img:'https://g3.sunlight.net/media/products/a6e08cc34a6bdde32ded109f8b219f7d814d154f.jpg'}))
    }
   
    return(
        <Main NavImage={Image} Video={Video} add_108789={add_108789} add_151996={add_151996} add_158125={add_158125} add_285237={add_285237} add_38141={add_38141} add_66267={add_66267} />
    )
}