import style from "./nav.module.css"
import React from "react"
import { connect } from "react-redux"
import { Nav2AC, Nav1AC, Nav3AC, NavVideo } from "../../redux/action"
export const Nav = (props) => {
    console.log(props,'props');
    return(
        <nav className={style.nav_gallery}>
            <div className={style.nav_gallery_box}>
                <div className={style.nav_gallery_item} onClick={props.navVideo}>
                    <img className={style.nav_gallery_img} src={props.img1} />
                    <div className={style.gallery_item_video}>
                        <img src={props.icon} alt="video"/>
                    </div>
                </div>
                <div className={style.nav_gallery_item} onClick={props.nav1}>
                    <img className={style.nav_gallery_img} src={props.img1} />
                </div>
                <div className={style.nav_gallery_item} onClick={props.nav2}>
                    <img className={style.nav_gallery_img} src={props.img2} />
                </div>
                <div className={style.nav_gallery_item} onClick={props.nav3}>
                    <img className={style.nav_gallery_img} src={props.img3} />
                </div>
            </div>
        </nav>
    )
}
