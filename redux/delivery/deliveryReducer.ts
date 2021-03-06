import { ActionsTypes } from "../type";
import { DELIVERY_ADD } from "./deliveryTypes";



export type DeliveryReducerType={
    Header:string
    text:string
}

const initialState: DeliveryReducerType={
    Header: '1.Срок доставки',
    text: 'Дата и интервал доставки зависят от адреса получения и будут указаны в Корзине при оформлении заказа. Если в заказе несколько изделий, они могут быть доставлены разными посылками в разное время. Накануне дня доставки Вас уведомит Транспортная компания СМС сообщением или звонком на указанный в заказе номер телефона. В день доставки за 30 мин. до доставки с Вами свяжется курьер.'
}

export const DeliveryReducer=(state = initialState,action:ActionsTypes):DeliveryReducerType=>{
    switch(action.type){
        case DELIVERY_ADD:
            return{
                ...state,
                text: action.text,
                Header: action.header
            }
        default:
            return state
    }
}
