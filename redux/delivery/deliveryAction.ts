import { DELIVERY_ADD } from "./deliveryTypes"


export type DeliveryAddType={
    type: typeof DELIVERY_ADD
    text: string
    header: string
  }
  export function DeliveryAddAC(text: string,header: string):DeliveryAddType{
      return {
        type: DELIVERY_ADD,
        text,
        header
      }
  }