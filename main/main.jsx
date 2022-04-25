
import { Bio } from "./bio/bio"
import style from "./main.module.css"
import { Nav } from "./nav_gallery/nav_gallery"
import { BrowserRouter, Route } from "react-router-dom";
import React from "react"
export const Main = () => {
    return(
        <div className={style.box}>
            <Nav />
            <Bio />
            <main className={style.main}>
            <section className={style.content}>
                <div className={style.content_info}>
                    <section className={style.content_gallery}>
                        <div className={style.gallery_items}>
                            <div className={style.gallery_item}>
                                <img src="https://g6.sunlight.net/media/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg"/>
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
                            <a href="https://sunlight.net/catalog/bracelets_151996.html" className={style.products_buy}>Добавить в корзину</a>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/bracelets_38141.html" className={style.products_image}>
                                <img src="https://g1.sunlight.net/media/products/100d7b484989d7e826d41faa3e3d10972ee2b90a.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/bracelets_38141.html" className={style.products_name}>Золотой браслет. Артикул: 38141</a>
                            <p>76 320₽</p>
                            <a href="https://sunlight.net/catalog/bracelets_38141.html" className={style.products_buy}>Добавить в корзину</a>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/ring_108789.html" className={style.products_image}>
                                <img src="https://g7.sunlight.net/media/products/993120b1b2794b1124ec7a4971a27ab94633e286.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/ring_108789.html" className={style.products_name}>Золотое кольцо с фианитами. Артикул: 108789</a>
                            <p>44 990₽</p>
                            <a href="https://sunlight.net/catalog/ring_108789.html" className={style.products_buy}>Добавить в корзину</a>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/ring_66267.html" className={style.products_image}>
                                <img src="https://g5.sunlight.net/media/products/86e1c4af4c06c061af77693ed1d149c63e68ccc4.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/ring_66267.html" className={style.products_name}>Золотой кольцо с фианитами. Артикул: 66267</a>
                            <p>24 990₽</p>
                            <a href="https://sunlight.net/catalog/ring_66267.html" className={style.products_buy}>Добавить в корзину</a>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/ring_158125.html" className={style.products_image}>
                                <img src="https://g7.sunlight.net/media/products/7056a22c0f8f33c034cac0e96dd7f72cc8de4915.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/ring_158125.html" className={style.products_name}>Золотое кольцо с фианитами. Артикул: 158125</a>
                            <p>12 490₽</p>
                            <a href="https://sunlight.net/catalog/ring_158125.html" className={style.products_buy}>Добавить в корзину</a>
                        </div>
                        <div className={style.products_item}>
                            <a href="https://sunlight.net/catalog/earring_285237.html" className={style.products_image}>
                                <img src="https://g3.sunlight.net/media/products/a6e08cc34a6bdde32ded109f8b219f7d814d154f.jpg" alt=""/>
                            </a>
                            <a href="https://sunlight.net/catalog/earring_285237.html" className={style.products_name}>Золотые серьги с топазами и бриллиантами. Артикул: 285237</a>
                            <p>72 990₽</p>
                            <a href="https://sunlight.net/catalog/earring_285237.html" className={style.products_buy}><p>Добавить в корзину</p></a>
                        </div>
                    </div> 
                </section>
            </section>
            </main>
        </div>
    )
}