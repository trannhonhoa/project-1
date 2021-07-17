import {ActionsTypes} from '../constants/actionStyles'
const initialState = {
    products: []
}
export const productReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ActionsTypes.SET_PRODUCTS:
            return {...state, products: action.payload}
        default: return state
    }
}
export const selectedProductReducer = (state={}, action) =>{
    switch (action.type) {
        case ActionsTypes.SELECTED_PRODUCT:
            return {...action.payload}
        case  ActionsTypes.REMOVE_SELECTED_PRODUCT:
            return {};
    
        default: return {...state}
           
    }
}