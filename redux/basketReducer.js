import { BASKET_ADD, BASKET_DELITE } from "./types";

const initialState={
    Basket: []
}

export const BasketReducer=(state = initialState,action)=>{

    switch(action.type){
        case BASKET_ADD:
            console.log(state);
            return{
                ...state,
                Basket: [...state.Basket, action.data]
            }
        case BASKET_DELITE:
            return(()=>{
                    console.log(action.id,'wwwwwwwwwwwwwwwwwwwwwwwwww');
                const id = action.id
                const Basket = state.Basket
                const itemIndex = Basket.findIndex(res => res.id === id)
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