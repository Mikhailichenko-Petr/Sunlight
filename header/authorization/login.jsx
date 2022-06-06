import { NavLink } from "react-router-dom"

export const Login=()=>{
    return(
            <div>
                <h1>login</h1>
                <input type="text" />
                <button>sdfsdf</button>
                <p>
                    у вас нет Аккаунта?<NavLink to="/Register"> Регистрация</NavLink>
                </p>
            </div>
    )
}