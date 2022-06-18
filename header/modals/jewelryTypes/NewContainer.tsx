import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { SetPageAC } from "../../../redux/action"
import { New } from "./New"
type dataType={
    Users:Array<string>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
type burgerType={
    BurgerReducer:dataType
}

export const NewContainer=()=>{
    const dispatch=useDispatch()
    const State=useSelector((res:burgerType)=>res.BurgerReducer.Users)
    const PageSize=useSelector((res:burgerType)=>res.BurgerReducer.pageSize)
    const totalUsersCount=useSelector((res:burgerType)=>res.BurgerReducer.totalUsersCount)
    const CurrentPage=useSelector((res:burgerType)=>res.BurgerReducer.currentPage)
    const page=(p:any)=>{
        dispatch(SetPageAC(p))
    }
    
    return(
        <New  State={State} PageSize={PageSize} totalUsersCount={totalUsersCount} CurrentPage={CurrentPage} Page={page} />
    )
}