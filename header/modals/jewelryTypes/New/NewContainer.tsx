import { FC, useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { SetPageAC } from "../../../../redux/action"
import { getUsersThunkCreator } from "../../../../redux/burgerThunk"
import { New } from "./New"

type NewContainerType={
    State:()=>void
    PageSize:number
    totalUsersCount:number
    CurrentPage:number
    getUsersThunkCreator:(arg1:number,arg2:number)=>void
}

const NewContainer:FC<NewContainerType>=({State,PageSize,totalUsersCount,CurrentPage,getUsersThunkCreator})=>{

    const onPageChanged = (page:number) => {
        getUsersThunkCreator(page, PageSize )
    } 

    useEffect(()=>{
        getUsersThunkCreator(CurrentPage,PageSize) 
    },[])
    return(
        <New  State={State} PageSize={PageSize} onPageChanget={onPageChanged} totalUsersCount={totalUsersCount} CurrentPage={CurrentPage} />
    )

}
let mapStateToProps = (state:any) => ({
    State: state.BurgerReducer.Users,
    PageSize: state.BurgerReducer.pageSize,
    totalUsersCount: state.BurgerReducer.totalUsersCount,
    CurrentPage: state.BurgerReducer.currentPage
  });
export default connect(mapStateToProps, {getUsersThunkCreator})(NewContainer);