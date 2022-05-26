
import { BasketContainer } from './../header/Basket/basketContainer';
import { BASKET_ADD, BASKET_DELITE } from "./types";

type Product={
    id:string
    name:string
    price:number
    discount:number
    img:string
}
type InitialState={
    Basket:Array<Product>
}
const initialState: InitialState ={
    Basket: []
}

type ActionType={
    data:Array<Product>
    type:string
    id:string
}



export const BasketReducer=(state:InitialState = initialState,action:ActionType)=>{
    
    switch(action.type){
        case BASKET_ADD:string:
            return{
                ...state,
                Basket: [...state.Basket, action.data]
            }
        case BASKET_DELITE:string:
            return(()=>{
                const id:string= action.id
                const Basket: Array<Product> = state.Basket
                const itemIndex:number = Basket.findIndex(res=> res.id === id)
                const nextComments = [
                    ...Basket.slice(0,itemIndex),
                    ...Basket.slice(itemIndex+1)
                ]
                return{
                    ...state,
                    Basket: nextComments
                }  
            })()
        default:
            return state
    }
}

