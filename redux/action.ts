import { Product } from './basketReducer';
import {NAV_IMG2, NAV_IMG1, NAV_IMG3, NAV_VIDEO, BASKET_ADD, BASKET_DELITE, DELIVERY_ADD, IMAGE_DOG, SET_USER, REMOVE_USER } from "./types";

export type ActionsTypes = Nav1Type|Nav2Type|Nav3Type|NavVideoType|BasketAddType|BasketDelteType|DeliveryAddType|SetUserType|RemoveUserType

///////////// redux thunk


type ImageDogType={
  type: typeof IMAGE_DOG
  data: string
}
export function ImageDogAC(data:string):ImageDogType {
    return {
      type: IMAGE_DOG,
      data
    }
}

////////////// auth

type SetUserType={
  type: typeof SET_USER
  user:string
  token:string
  isLoaded:boolean
}
export function SetUserAC(data:SetUserType):SetUserType {
    return {
      type: SET_USER,
      user:data.user,
      token:data.token,
      isLoaded:data.isLoaded
    }
}

type RemoveUserType={
  type: typeof REMOVE_USER
  data: string
}
export function RemoveUser(data:string):RemoveUserType {
    return {
      type: REMOVE_USER,
      data
    }
}
///////////// nav

type NavVideoType={
  type: typeof NAV_VIDEO
  data: string
}
export function NavVideo(data:string):NavVideoType {
    return {
      type: NAV_VIDEO,
      data
    }
}

type Nav1Type={
  type: typeof NAV_IMG1
  data: string
}
export function Nav1AC(data:string):Nav1Type {
    return {
      type: NAV_IMG1,
      data
    }
}

type Nav2Type={
  type: typeof NAV_IMG2
  data: string
}
export function Nav2AC(data:string):Nav2Type {
    return {
      type: NAV_IMG2,
      data
    }
}

type Nav3Type={
  type: typeof NAV_IMG3
  data: string
}
export function Nav3AC(data:string):Nav3Type {
    return {
      type: NAV_IMG3,
      data
    }
}

////////////// basket
type BasketAddType={
  type: typeof BASKET_ADD
  data: Product
}
export function BasketaAddAC(data:Product):BasketAddType {
    return {
      type: BASKET_ADD,
      data
    }
}

type BasketDelteType={
  type: typeof BASKET_DELITE
  id: string
}
export function BasketDeliteAC(id:string):BasketDelteType {
    return {
      type: BASKET_DELITE,
      id
    }
}

////////////// delivery
type DeliveryAddType={
  type: typeof DELIVERY_ADD
  text: string
  header: string
}
export function DeliveryAddAC(text: string,header: string):DeliveryAddType {
    return {
      type: DELIVERY_ADD,
      text,
      header
    }
}