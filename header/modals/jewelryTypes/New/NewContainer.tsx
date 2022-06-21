import { FC, useEffect } from "react"
import { connect } from "react-redux"
import { Preloder } from "../../../../preloader/preloader"

import { getUsersThunkCreator } from "../../../../redux/burger/burgerThunk"
import { UserType } from "../../../../redux/type"
import { New } from "./New"

type NewContainerType={
    isFetching:boolean
    State:UserType
    PageSize:number
    totalUsersCount:number
    CurrentPage:number
    getUsersThunkCreator:(arg1:number,arg2:number)=>void
}

const NewContainer:FC<NewContainerType>=({isFetching,State,PageSize,totalUsersCount,CurrentPage,getUsersThunkCreator})=>{
    const onPageChanged = (page:number) => {
        getUsersThunkCreator(page, PageSize )
    } 

    useEffect(()=>{
        getUsersThunkCreator(CurrentPage,PageSize) 
    },[])
    return(
        <>
        {isFetching?<Preloder/>:<New  State={State} PageSize={PageSize} onPageChanget={onPageChanged} totalUsersCount={totalUsersCount} CurrentPage={CurrentPage} />}
        
        </>
    )
}
let mapStateToProps = (state:any) => ({
    isFetching:state.BurgerReducer.isFetching,
    State: state.BurgerReducer.Users,
    PageSize: state.BurgerReducer.pageSize,
    totalUsersCount: state.BurgerReducer.totalUsersCount,
    CurrentPage: state.BurgerReducer.currentPage
  });
export default connect(mapStateToProps, {getUsersThunkCreator})(NewContainer);