import { useDispatch } from "react-redux"
import { AuthThunkCreator } from "../../../redux/burgerReducer"
import { Modal } from "./modal"

export const ModalContainer=()=>{
    const dispatch:any=useDispatch()
    const decorations = ():any =>{
        dispatch(AuthThunkCreator())
    }
    return(
        <Modal decorations={decorations}/>
    )
} 

