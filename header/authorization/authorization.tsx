import { Redirect } from "react-router-dom"
import { Login } from "./login"


export const Authorization=(req:any,res:any)=>{
    return(
        <div>
            <div>
                <img src="https://g0.sunlight.net/static/shop/images/cart/redpack.jpg" alt="" />
            </div>
            <div>
                <Redirect to="/Login" />
                <Login />
            </div>
        </div>
    )
}