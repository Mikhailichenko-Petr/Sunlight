import { BASKET_ADD, BASKET_DELITE } from "../types"
import { Product } from "./basketReducer"

export type BasketAddType={
    type: typeof BASKET_ADD
    data: Product
  }
  export function BasketaAddAC(data:Product):BasketAddType{
      return {
        type: BASKET_ADD,
        data
      }
  }
  
  export type BasketDelteType={
    type: typeof BASKET_DELITE
    id: string
  }
  export function BasketDeliteAC(id:string):BasketDelteType{
      return {
        type: BASKET_DELITE,
        id
      }
  }
  