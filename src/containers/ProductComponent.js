import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
const ProductComponent = () =>{
    const products = useSelector(state => state.allProducts.products);
    const renderlist = products.map((product) =>{
        const {id, title, image, price, categogy} = product;
        return(
            <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3" key={id}>
                <Link to={`/product/${id}`}>
               <div className="card-deck" style={{textAlign: "center"}}>  
                    <div className="card">
                        <img className="card-img-top" style={{width:"100%"}} src={image} alt={title}></img>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="price">${price}</div>
                            <div className="category">${categogy}</div>
                        </div>
                    </div> 
               </div>
                </Link>
            </div>
        )
    })
    return(
        <>{renderlist}</>
    )
    
};
export default ProductComponent;