import { Product } from './basketReducer';
import {NAV_IMG2, NAV_IMG1, NAV_IMG3, NAV_VIDEO, BASKET_ADD, BASKET_DELITE, DELIVERY_ADD } from "./types";

export type ActionsTypes = Nav1Type|Nav2Type|Nav3Type|NavVideoType|BasketAddType|BasketDelteType|DeliveryAddType

export function CommentLoadAC(){
  //@ts-ignore
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const json = await response.json()
        dispatch({
          //@ts-ignore
            type: COMMENTS_LOAD,
            data:json
        })
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