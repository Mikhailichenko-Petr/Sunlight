import { usersAPI } from '../../API/api';
import { GetUsersAC, SetPageAC } from './BurgerAction';



export const getUsersThunkCreator= (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
            const response = await  usersAPI.getUsers(currentPage, pageSize);
            dispatch(GetUsersAC(response.items))
            dispatch(SetPageAC(currentPage))
    }
}