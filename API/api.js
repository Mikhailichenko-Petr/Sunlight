import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: { "API-KEY": "6c5a7645-0acc-44ea-8264-8cc0a771effb" },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
      ).then(response => response.data)
}
}
