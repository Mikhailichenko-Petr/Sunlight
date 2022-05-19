import style from "./nav.module.css"
import React from "react"
import { connect } from "react-redux"
import { Nav2AC, Nav1AC, Nav3AC, NavVideo } from "../../redux/action"
import { Nav } from "./nav_gallery"


const NavContainer = (props) => {
    const icon="https://cdn-icons-png.flaticon.com/512/54/54771.png"
    const img1="https://g9.sunlight.net/media/i/160/85/products/19464f4715ff1acb701efc6716f214e043065062.jpg"
    const img2="https://g6.sunlight.net/media/i/160/85/products/26d21403-776b-11ec-82dc-005056b30bd2.jpg"
    const img3="https://g3.sunlight.net/media/i/160/85/products/3ba9125b-6952-11ec-82c9-005056b30bd2.jpg"
    return(
        <Nav navVideo={props.navVideo} nav1={props.nav1} nav2={props.nav2} nav3={props.nav3}
             img1={img1} icon={icon} img2={img2} img3={img3}
             />
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
            const video="https://g7.sunlight.net/media/product/video-crf25-800/2021/12/24/e30a3fd6488cae114b6ca47c4beb4c9b4b7f7502.mp4"
            return dispath(NavVideo(video))
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
export default connect(mapStateToProps,mapDispatchToProps)(NavContainer)