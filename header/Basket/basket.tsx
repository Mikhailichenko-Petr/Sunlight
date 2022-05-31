import { FC } from "react"
import { Product } from "../../redux/basketReducer"
//@ts-ignore
import style from "./basket.module.css"

type DataType={
    length:string
    map:any
}
type BasketType={
    data:DataType
    delite:(id:string)=>void
    allDiscount:number
    allPrice:number
    allWithoutDiscount:number
}

export const Basket:FC<BasketType> =({data,delite,allDiscount,allPrice,allWithoutDiscount})=>{
    const deleteProduct=(e: any)=>{
        e.preventDefault()
        const id:string = e.target.parentElement.id
        delite(id)
    }
    return(
        <div className={style.basket}>
          <div>
            <h1>Корзина</h1>
            {data.map((res:Product)=>{
                return(
                    <div id={res.id} className={style.product_data}>
                            <div>{res.name}</div>
                            <div>{res.price}₽</div>
                            <div><s>{res.discount}</s>₽</div>
                            <div><img src={res.img} /></div>
                            <div>{Math.round((res.price-res.discount)/res.discount*100)}%</div>
                            <div>Купить</div>
                            <div>В избранное</div>
                            <div onClick={deleteProduct} className={style.delete}>Удалить</div>
                    </div>
                )   
            })}
          </div>
           <div className={style.total}>
               <div className={style.total_box}>
                   <div>итого</div>
                   <div>{allPrice} ₽</div>
               </div>
               <div className={style.total_box}>
                    <div>{data.length} товара на сумму </div>
                    <div>{allWithoutDiscount} ₽</div>
               </div>
               <div className={style.total_box}>
                    <div>Сумма скилок и акций</div>
                    <div>-{allDiscount} ₽</div>
               </div>
               <button>перейти к оформлению</button>
           </div>
        </div>
    )
}