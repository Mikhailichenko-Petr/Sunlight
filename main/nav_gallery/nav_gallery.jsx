import style from "./nav.module.css"
import React from "react"
export const Nav = () => {
    return(
        <nav className={style.nav_gallery}>
            <div className={style.nav_gallery_box}>
                <div className={style.nav_gallery_item}>
                    <img className={style.nav_gallery_img} src="https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg" />
                    <div className={style.gallery_item_video}>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54771.png" alt="video"/>
                    </div>
                </div>
                <div className={style.nav_gallery_item}>
                    <img className={style.nav_gallery_img} src="https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg"/>
                </div>
                <div className={style.nav_gallery_item}>
                    <img className={style.nav_gallery_img} src="https://g6.sunlight.net/media/i/160/85/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg"/>
                </div>
                <div className={style.nav_gallery_item}>
                    <img className={style.nav_gallery_img} src="https://g3.sunlight.net/media/i/160/85/products/3ba9125b-6952-11ec-82c9-005056b30bd2.jpg"/>
                </div>
            </div>
        </nav>
    )
}
