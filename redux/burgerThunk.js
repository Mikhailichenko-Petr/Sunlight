import { usersAPI } from '../API/api';
import { GetUsersAC, SetPageAC } from './action';


// export const getUsersThunkCreator = (currentPage, pageSize) => {

//     return async (dispatch) => {

//             dispatch(toggleFetching(true));

//             const response = await  usersAPI.getUsers(currentPage, pageSize);
          
//             dispatch(toggleFetching(false));
//             dispatch(setUsers(response.items));
//             dispatch(setTotalCount(response.totalCount));
//             dispatch(setCurrentPage(currentPage))
//     }
// }

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
            const response = await  usersAPI.getUsers(currentPage, pageSize);
            dispatch(GetUsersAC(response.items))
            dispatch(SetPageAC(currentPage))
    }
}