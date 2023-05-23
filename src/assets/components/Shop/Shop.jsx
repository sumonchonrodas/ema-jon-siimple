import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
const Shop = () => {
const [products,setProduct] = useState([])
const [cart,setCart] = useState([])

useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProduct(data))
},[]);

useEffect(()=>{
    const getStoredCart = getShoppingCart()
    console.log(getStoredCart);
},[])
const handleAddToCard = (product) =>{
    const newCart =[...cart,product]
    setCart(newCart)
    addToDb(product.id)
}

    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                    products.map(product =><Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard} 
                        
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;