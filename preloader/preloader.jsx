import images from "./img.gif"
import style  from "./preloader.module.css"

export const Preloder = () => {
    return(
        <div className={style.container}>
            <img className={style.img} src={images} alt='loader'></img>
        </div>
    )
}
    


