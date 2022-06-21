import { GET_USERS, SET_PAGE, TOGGLE_FETCHING } from "./burgerType"


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
  export type toggleFetchingTypes={
    type:typeof TOGGLE_FETCHING,
    isFetching:boolean
  }
  export let toggleFetching = (fetching:boolean) => ({
    type:TOGGLE_FETCHING,
    isFetching: fetching
})