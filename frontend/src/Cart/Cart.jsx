import React from 'react';
// import { useRef } from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import './Cart.css';
import Cart_footer from './cart_component/Cart_footer';
import Flash from './cart_component/Flash';
import Product from './cart_component/Product';
import { useSelector } from "react-redux"



const Cart = () => {

  
  const [val, setVal] = useState(1);

  return (
    <>
      <Flash />
      <div className="head">
        <h1
          style={{
            fontFamily: 'Tiemann,serif',
            fontWeight: ' 400',
            fontSize: '3em',
          }}
        >
          CART
        </h1>
        <h3 style={{ borderBottom: '1px solid gray', display: 'inline-block' }}>
          Continue Shopping
        </h3>
      </div>
      <div className="tag">
        <div className="productInfo_tag">
          <div>Price</div>
          <div>Quantity</div>
          <div>total</div>
        </div>
      </div>

      <main className="main">
        <hr className="hr" />
        <Product val={val} setVal={setVal} />
        <hr style={{ backgroundColor: '#e8e8e1' }} />
        <div style={{ height: '200px' }}>
          <div className="subtotal">
            <div className="upper">
              <div>SUBTOTAL</div>
              <div subtotal_val>${34564}</div>
            </div>
            <p style={{ fontSize: '1.1rem' }}>
              Shipping, taxes, and discounts codes calculated at checkout.
            </p>
            <div className="lower">
              <button className="update">Update Cart</button>
              <button className="checkout">Check Out</button>
            </div>
          </div>
        </div>
      </main>
      <hr style={{ backgroundColor: '#e8e8e1' }} />

      <Cart_footer />
    </>
  );
};

export default Cart;
