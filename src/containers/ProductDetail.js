import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import * as action from '../redux/actions/productActions';
const ProductDetail = () =>{
    const { productID } = useParams();
    const product = useSelector(state => state.selectedProduct);
    const {title, image, price, category, description} = product;
    console.log(product);
    const dispatch = useDispatch();
    console.log(productID);
    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productID}`).catch(err => {console.log(err)})
        dispatch(action.selectedProduct(response.data));
    }
    useEffect(() => {
        if(productID && productID !== "")
            {
                fetchProductDetail();
            } 
        return () => {
            dispatch(action.removeProduct())
        }
            
    },[productID])
    return(
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
};
export default ProductDetail;