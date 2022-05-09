import { Bio } from "./bio/bio"
import style from "./main.module.css"
import  Nav  from "./nav_gallery/nav_gallery"
import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BasketaAddAC } from "../redux/action"
import uniqid from "uniqid"

export const Main = (props) => {
    const Image=useSelector(state=> state.NavReducer.Image)
    const Video=useSelector(state=> state.NavReducer.video)
    const bask=useSelector(state=> state.BasketReducer.Basket)
    const dispath=useDispatch()
    const id =uniqid()
    
    const add_38141=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотой браслет. Артикул: 38141', price:36740, discount:73480,img:'https://g1.sunlight.net/media/products/100d7b484989d7e826d41faa3e3d10972ee2b90a.jpg'}))
    }  
    const add_235978=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотые серьги. Артикул: 235978', price:17997,discount:59990, img:'https://g9.sunlight.net/media/products/19464f4715ff1acb701efc6716f214e043065062.jpg'}))
    }
    const add_151996=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотой браслет. Артикул: 151996', price:223100,discount:196990, img:'https://g2.sunlight.net/media/products/01010ab69387693aaab7a97989beb8e4c10e5585.jpg'}))
    }
    const add_108789=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотое кольцо с фианитами. Артикул: 108789',price:13497, discount:44990, img:'https://g7.sunlight.net/media/products/993120b1b2794b1124ec7a4971a27ab94633e286.jpg'}))
    }
    const add_66267=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотой кольцо с фианитами. Артикул: 66267', price:7497,discount:24990, img:'https://g5.sunlight.net/media/products/86e1c4af4c06c061af77693ed1d149c63e68ccc4.jpg'}))
    }
    const add_158125=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотое кольцо с фианитами. Артикул: 158125',price:6245, discount:12490, img:'https://g7.sunlight.net/media/products/7056a22c0f8f33c034cac0e96dd7f72cc8de4915.jpg'}))
    }
    const add_285237=()=>{
        dispath(BasketaAddAC({id:id, name:'Золотые серьги с топазами и бриллиантами. Артикул: 285237', price:16990,discount:56633, img:'https://g3.sunlight.net/media/products/a6e08cc34a6bdde32ded109f8b219f7d814d154f.jpg'}))
    }
   
 
    return(
        <div className={style.box}>
            <Nav store={props.store} />
            <Bio />
            <main className={style.main}>
            <section className={style.content}>
                <div className={style.content_info}>
                    <section className={style.content_gallery}>
                        <div className={style.gallery_items}>
                            <div className={style.gallery_item}>
                                {Image ? <img src={Image} /> 
                                : <video playsinline="" autoplay="" loop="" muted="">
                                       <source src={Video} type="video/mp4" />
                                  </video>}
                            </div>
                        </div>
                    </section>
                    <section></section>
                </div>
                <section className={style.content_products}>
                    <h2 className={style.products_title}>Товары</h2>
                    <div className={style.products_items}>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/bracelets_151996.html" className={style.products_image}>
                                <img src="https://g2.sunlight.net/media/products/01010ab69387693aaab7a97989beb8e4c10e5585.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/bracelets_151996.html" className={style.products_name}>Золотой браслет. Артикул: 151996</a>
                            <p>223 100₽</p>
                            <button href="https://sunlight.net/catalog/bracelets_151996.html" className={style.products_buy} onClick={add_151996} >Добавить в корзину</button>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/bracelets_38141.html" className={style.products_image}>
                                <img src="https://g1.sunlight.net/media/products/100d7b484989d7e826d41faa3e3d10972ee2b90a.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/bracelets_38141.html" className={style.products_name}>Золотой браслет. Артикул: 38141</a>
                            <p>76 320₽</p>
                            <button className={style.products_buy} onClick={add_38141}>Добавить в корзину</button>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/ring_108789.html" className={style.products_image}>
                                <img src="https://g7.sunlight.net/media/products/993120b1b2794b1124ec7a4971a27ab94633e286.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/ring_108789.html" className={style.products_name}>Золотое кольцо с фианитами. Артикул: 108789</a>
                            <p>44 990₽</p>
                            <button href="https://sunlight.net/catalog/ring_108789.html" className={style.products_buy} onClick={add_108789} >Добавить в корзину</button>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/ring_66267.html" className={style.products_image}>
                                <img src="https://g5.sunlight.net/media/products/86e1c4af4c06c061af77693ed1d149c63e68ccc4.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/ring_66267.html" className={style.products_name}>Золотой кольцо с фианитами. Артикул: 66267</a>
                            <p>24 990₽</p>
                            <button href="https://sunlight.net/catalog/ring_66267.html" className={style.products_buy} onClick={add_66267} >Добавить в корзину</button>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/ring_158125.html" className={style.products_image}>
                                <img src="https://g7.sunlight.net/media/products/7056a22c0f8f33c034cac0e96dd7f72cc8de4915.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/ring_158125.html" className={style.products_name}>Золотое кольцо с фианитами. Артикул: 158125</a>
                            <p>12 490₽</p>
                            <button href="https://sunlight.net/catalog/ring_158125.html" className={style.products_buy} onClick={add_158125}>Добавить в корзину</button>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/earring_285237.html" className={style.products_image}>
                                <img src="https://g3.sunlight.net/media/products/a6e08cc34a6bdde32ded109f8b219f7d814d154f.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/earring_285237.html" className={style.products_name}>Золотые серьги с топазами и бриллиантами. Артикул: 285237</a>
                            <p>72 990₽</p>
                            <button href="https://sunlight.net/catalog/earring_285237.html" className={style.products_buy} onClick={add_285237}>Добавить в корзину</button>
                        </div>
                    </div> 
                </section>
            </section>
            </main>
        </div>
    )
}