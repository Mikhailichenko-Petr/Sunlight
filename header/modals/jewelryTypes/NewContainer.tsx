import { useSelector } from "react-redux"
import { New } from "./New"
type dataType={
    Images:Array<string>
    pageSize:number
    dogCount:number
    currentPage:number
}
type burgerType={
    BurgerReducer:dataType
}

export const NewContainer=()=>{
    const State=useSelector((res:burgerType)=>res.BurgerReducer.Images)
    const PageSize=useSelector((res:burgerType)=>res.BurgerReducer.pageSize)
    const TotalImagesCount=useSelector((res:burgerType)=>res.BurgerReducer.dogCount)
    const CurrentPage=useSelector((res:burgerType)=>res.BurgerReducer.currentPage)
    
    return(
        <New  State={State} PageSize={PageSize} TotalImagesCount={TotalImagesCount} CurrentPage={CurrentPage} />
    )
}