import { useDispatch, useSelector } from "react-redux"
import { BasketDeliteAC } from "../../redux/action"
import style from "./basket.module.css"
import uniqid from "uniqid"

export const Basket =(props)=>{
    const data = useSelector(res=>res.BasketReducer.Basket)
    const dispatch=useDispatch()

    const delite=(e)=>{
        e.preventDefault()
        const id = e.target.parentElement.id
        dispatch(BasketDeliteAC(id))
    }
    return(
        <div className={style.basket}>
          <div>
            <h1>Корзина</h1>
            {data.map(res=>{
                return(
                    <div id={res.id} className={style.product_data}>
                            <div>{res.name}</div>
                            <div>{res.price}₽</div>
                            <div>{res.discount}₽</div>
                            <div><img src={res.img} /></div>
                            <div onClick={delite}>X</div>
                    </div>
                )   
            })}
          </div>
           <div className={style.total}>
               <div className={style.total_box}>
                   <div>итого</div>
                   <div>2222pyb.</div>
               </div>
               <div className={style.total_box}>
                    <div>{data.length} товара на сумму </div>
                    <div>2222pyb.</div>
               </div>
               <div className={style.total_box}>
                    <div>Сумма скилок и акций</div>
                    <div>2222pyb.</div>
               </div>
               <button>перейти к оформлению</button>
           </div>
        </div>
    )
}