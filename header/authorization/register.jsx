import { NavLink } from "react-router-dom"

export const Registr=()=>{
    return(
            <div>
                <h1>регистрация</h1>
                <p>
                    у вас уже есть аккаунт?<NavLink to="/Login"> Войти</NavLink>
                </p>
            </div>
        
    )
}