import style from "./nav.module.css"
import React, { useEffect } from "react"
import { Image1AC, Image2AC, Image3AC } from "../../redux/nav_reducer"
export const Nav = (props) => {
    const imageStore= props.store.getState().nav_reducer.img[0].image
    const Nav_gallery=(props)=>{
        return(
            <div className={style.nav_gallery_item}>
                <img className={style.nav_gallery_img} src={props.imgs} onClick={NewPhoto2}/>
            </div>
        )
    }
    const NewPhoto1=()=>{
        props.store.dispatch(Image1AC())
    }
    const NewPhoto2=()=>{
        console.log(imageStore);
        props.store.dispatch(Image2AC())
        console.log(props.store.getState());
    }
    const NewPhoto3=()=>{
        props.store.dispatch(Image3AC())
    }
 
    return(
        <nav className={style.nav_gallery}>
            <div className={style.nav_gallery_box}>
                <div className={style.nav_gallery_item}>
                    <img className={style.nav_gallery_img} src="https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg" />
                    <div className={style.gallery_item_video}>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54771.png" alt="video"/>
                    </div>
                </div>
                <Nav_gallery imgs={'https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg'}  />
                <Nav_gallery imgs={'https://g6.sunlight.net/media/i/160/85/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg'}  />
                <Nav_gallery imgs={imageStore}  />
            </div>
        </nav>
    )
}
