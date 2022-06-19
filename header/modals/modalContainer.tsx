import { useDispatch } from "react-redux"
import { getUsersThunkCreator } from "../../redux/burgerThunk"


import { Modal } from "./modal"

export const ModalContainer=()=>{
    const dispatch:any=useDispatch()
    const decorations = ():any =>{
        dispatch(getUsersThunkCreator())
    }
    return(
        <Modal decorations={decorations}/>
    )
} 

