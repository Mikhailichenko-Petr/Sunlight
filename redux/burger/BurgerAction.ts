import { GET_USERS, SET_PAGE } from "../types"

export type GetUsersType={
    type: typeof GET_USERS
    data: string
  }
  export function GetUsersAC(data:string):GetUsersType {
      return {
        type: GET_USERS,
        data
      }
  }
  
  export type SetPageType={
    type: typeof SET_PAGE
    data: number
  }
  export function SetPageAC(data:number):SetPageType {
      return {
        type: SET_PAGE,
        data
      }
  }