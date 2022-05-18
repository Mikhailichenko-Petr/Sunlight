import { useDispatch, useSelector } from "react-redux"
import { BasketDeliteAC } from "../../redux/action"
import style from "./basket.module.css"
import uniqid from "uniqid"

export const Basket =(props)=>{
    const delite=(e)=>{
        e.preventDefault()
        const id = e.target.parentElement.id
        props.delite(id)
    }
    return(
        <div className={style.basket}>
          <div>
            <h1>Корзина</h1>
            {props.data.map(res=>{
                return(
                    <div id={res.id} className={style.product_data}>
                            <div>{res.name}</div>
                            <div>{res.price}₽</div>
                            <div><s>{res.discount}</s>₽</div>
                            <div><img src={res.img} /></div>
                            <div>{Math.round((res.price-res.discount)/res.discount*100)}%</div>
                            <div>Купить</div>
                            <div>В избранное</div>
                            <div onClick={delite}>Удалить</div>
                    </div>
                )   
            })}
          </div>
           <div className={style.total}>
               <div className={style.total_box}>
                   <div>итого</div>
                   <div>{props.allPrice} ₽</div>
               </div>
               <div className={style.total_box}>
                    <div>{props.data.length} товара на сумму </div>
                    <div>{props.allWithoutDiscount} ₽</div>
               </div>
               <div className={style.total_box}>
                    <div>Сумма скилок и акций</div>
                    <div>-{props.allDiscount} ₽</div>
               </div>
               <button>перейти к оформлению</button>
           </div>
        </div>
    )
}