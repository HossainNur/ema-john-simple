import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,prd) => total + prd.price, 0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = total / 10;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items order: {cart.length}</h5>
            <p>Product price: {total}</p>
            <p><small>Tax + vat: {tax}</small></p>
            <p><small>Shiping Cost:{shipping}</small></p>
            <h5>Total price: {total + shipping +tax}</h5>
        </div>
    );
};

export default Cart;