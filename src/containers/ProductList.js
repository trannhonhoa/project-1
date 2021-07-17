import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import * as action from '../redux/actions/productActions'
import ProductComponent  from './ProductComponent'
const ProductList = () =>{
    const dispatch = useDispatch();
    const fetchProducts = async () =>{
        const response = await axios.get('https://fakestoreapi.com/products').catch(err =>{console.log(err)});
        dispatch(action.setProducts(response.data));
    }
    useEffect(() => {
        fetchProducts();   
    })

    
    return(
        <div className="container">
            <div className="row">
                <ProductComponent />
            </div>
        </div>
    )
};
export default ProductList;