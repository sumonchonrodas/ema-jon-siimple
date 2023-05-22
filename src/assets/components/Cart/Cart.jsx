import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {cart} = props;
    // const cart = props.cart;
    let totalPrice = 0
    let totalShipping = 0;
    for(const product of cart){
       totalPrice = totalPrice + product.price;
       totalShipping = totalShipping + product.shipping;
    }

    const tax = totalPrice*7/100;
    const grantTotal = totalPrice+totalShipping+tax
    return (
        <div className='cart'>
            <h2 style={{textAlign:'center'}}>Order Summary.</h2>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p>Total Shoping : {totalShipping}</p>
            <p>text: ${tax.toFixed(2)}</p>
            <h6>Grant totol :$ {grantTotal.toFixed(2)}</h6>
            
        </div>
    );
};

export default Cart;