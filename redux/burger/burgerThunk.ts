import { usersAPI } from '../../API/api';
import { GetUsersAC, SetPageAC, toggleFetching } from './BurgerAction';



export const getUsersThunkCreator= (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
            dispatch(toggleFetching(true))
            const response = await  usersAPI.getUsers(currentPage, pageSize);
            dispatch(toggleFetching(false))
            dispatch(GetUsersAC(response.items))
            dispatch(SetPageAC(currentPage))
            
    }
}