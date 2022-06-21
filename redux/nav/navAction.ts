import { NAV_IMG1, NAV_IMG2, NAV_IMG3, NAV_VIDEO } from "./navTypes"


export type NavVideoType={
    type: typeof NAV_VIDEO
    data: string
  }
  export function NavVideo(data:string):NavVideoType{
      return {
        type: NAV_VIDEO,
        data
      }
  }
  
  export type Nav1Type={
    type: typeof NAV_IMG1
    data: string
  }
  export function Nav1AC(data:string):Nav1Type{
      return {
        type: NAV_IMG1,
        data
      }
  }
  
  export type Nav2Type={
    type: typeof NAV_IMG2
    data: string
  }
  export function Nav2AC(data:string):Nav2Type{
      return {
        type: NAV_IMG2,
        data
      }
  }
  
  export type Nav3Type={
    type: typeof NAV_IMG3
    data: string
  }
  export function Nav3AC(data:string):Nav3Type{
      return {
        type: NAV_IMG3,
        data
      }
  }
  