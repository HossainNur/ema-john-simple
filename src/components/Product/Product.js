import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div >
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Only {stock} on store</small></p>
                <button
                 className="main-button"
                onClick={() => props.handleAddProduct(props.product)}
                >Add to cart</button>
            </div>
        </div>
    );
};

export default Product;