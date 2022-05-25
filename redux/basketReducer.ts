import { BASKET_ADD, BASKET_DELITE } from "./types";


const initialState ={
    Basket: []
}



export const BasketReducer=(state: any = initialState,action: any)=>{
    switch(action.type){
        case BASKET_ADD:
            return{
                ...state,
                Basket: [...state.Basket, action.data]
            }
        case BASKET_DELITE:
            return(()=>{
                const id:string= action.id
                const Basket: any[] = state.Basket
                const itemIndex = Basket.findIndex(res=> res.id === id)
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

