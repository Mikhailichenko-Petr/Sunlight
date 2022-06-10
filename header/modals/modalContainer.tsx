import { useDispatch } from "react-redux"
import { getHoundThunkCreator } from "../../redux/burgerReducer"

import { Modal } from "./modal"

export const ModalContainer=()=>{
    const dispatch:any=useDispatch()
    const decorations = ():any =>{
        dispatch(getHoundThunkCreator())
    }
    return(
        <Modal decorations={decorations}/>
    )
} 

