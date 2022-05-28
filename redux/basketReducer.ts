
import { BASKET_ADD, BASKET_DELITE } from "./types";

type Product={
    id:string
    name:string
    price:number
    discount:number
    img:string
    
}
type InitialState={
    Basket:Product[]
}
const initialState: InitialState ={
    Basket: []
}


export const BasketReducer=(state = initialState,action:any):InitialState=>{
    switch(action.type){
        
        case BASKET_ADD:
            console.log([...state.Basket, action.data],'wwwwwwwwwwwwwwwwww');
            return{
                ...state,
                Basket: [...state.Basket, action.data],
            }
            
            
        case BASKET_DELITE:
            return(()=>{
                const id= action.id
                const Basket = state.Basket
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

