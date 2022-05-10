import { useDispatch, useSelector } from "react-redux"
import { BasketDeliteAC } from "../../redux/action"
import style from "./basket.module.css"
import uniqid from "uniqid"

export const Basket =(props)=>{
    const data = useSelector(res=>res.BasketReducer.Basket)
    const dispatch=useDispatch()
    console.log(data);
    let allPrice = 0
    let allWithoutDiscount = 0
    let allDiscount = 0
    data.forEach(function(item) {
       allPrice += item.price
       allWithoutDiscount += item.discount
       allDiscount += item.discount - item.price
    });

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