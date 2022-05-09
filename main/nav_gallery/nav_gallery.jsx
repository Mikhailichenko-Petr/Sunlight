import style from "./nav.module.css"
import React from "react"
import { connect } from "react-redux"
import { Nav2AC, Nav1AC, Nav3AC, NavVideo } from "../../redux/action"
const Nav = (props) => {
    return(
        <nav className={style.nav_gallery}>
            <div className={style.nav_gallery_box}>
                <div className={style.nav_gallery_item} onClick={props.navVideo}>
                    <img className={style.nav_gallery_img} src="https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg" />
                    <div className={style.gallery_item_video}>
                        <img src="https://cdn-icons-png.flaticon.com/512/54/54771.png" alt="video"/>
                    </div>
                </div>
                <div className={style.nav_gallery_item} onClick={props.nav1}>
                    <img className={style.nav_gallery_img} src='https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg' />
                </div>
                <div className={style.nav_gallery_item} onClick={props.nav2}>
                    <img className={style.nav_gallery_img} src='https://g6.sunlight.net/media/i/160/85/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg' />
                </div>
                <div className={style.nav_gallery_item} onClick={props.nav3}>
                    <img className={style.nav_gallery_img} src='https://g3.sunlight.net/media/i/160/85/products/3ba9125b-6952-11ec-82c9-005056b30bd2.jpg' />
                </div>

            </div>
        </nav>
    )
}
function mapStateToProps(state){
    return{
        likes: state.NavReducer.Image
    }
}
function mapDispatchToProps(dispath){
    return{
        navVideo:()=>{
            const src='https://g7.sunlight.net/media/product/video-crf25-800/2021/12/24/e30a3fd6488cae114b6ca47c4beb4c9b4b7f7502.mp4'
            return dispath(NavVideo(src))
        },
        nav1:()=>{
            const src='https://g9.sunlight.net/media/products/19464f4715ff1acb701efc6716f214e043065062.jpg'
            return dispath(Nav1AC(src))
        },
        nav2:()=>{
            const src='https://g6.sunlight.net/media/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg'
            return dispath(Nav2AC(src))
        },
        nav3:()=>{
            const src='https://g3.sunlight.net/media/products/3ba9125b-6952-11ec-82c9-005056b30bd2.jpg'
            return dispath(Nav3AC(src))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Nav)