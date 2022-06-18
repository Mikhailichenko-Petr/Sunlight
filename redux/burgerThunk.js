// import { setUsers,
//     setTotalCount,
//     toggleFetching,
//     unfollow,
//     follow,
//     setCurrentPage
//     } from './users_actions'
// import { usersAPI, followAPI } from '../../../api/api'


// // export const getUsersThunkCreator = (currentPage, pageSize) => {

// //     return async (dispatch) => {

// //             dispatch(toggleFetching(true));

// //             const response = await  usersAPI.getUsers(currentPage, pageSize);
          
// //             dispatch(toggleFetching(false));
// //             dispatch(setUsers(response.items));
// //             dispatch(setTotalCount(response.totalCount));
// //             dispatch(setCurrentPage(currentPage))
// //     }
// // }

// export const getUsersThunkCreator = (currentPage, pageSize) => {
//     return async (dispatch) => {
//         debugger
//             const response = await  usersAPI.getUsers(currentPage, pageSize);
//             dispatch(GetUsersAC(response.items));
//     }
// }