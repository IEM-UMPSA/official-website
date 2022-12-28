import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const ShopingCart = ({setShopOpen, shopOpen}) => {

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const [counter, setCounter] = useState(0);
      const [counterr, setCounterr] = useState(0);
      const [counterrr, setCounterrr] = useState(0);
 
        //increase counter
        const increase = () => {
            setCounter(count => count + 1);
        };
        
        //decrease counter
        const decrease = () => {
            setCounter(count => count - 1);
        };

        //increase counter
        const increasee = () => {
            setCounterr(count => count + 1);
        };
        
        //decrease counter
        const decreasee = () => {
            setCounterr(count => count - 1);
        };

        //increase counter
        const increaseee = () => {
            setCounterrr(count => count + 1);
        };
        
        //decrease counter
        const decreaseee = () => {
            setCounterrr(count => count - 1);
        };

      return (
      <div className={shopOpen ? "sidebar__areas open": "sidebar__areas"}>
        <div className="cartmini__area">
         <div className="cartmini__wrapper">
            <div className="cartmini__title">
               <h4>Shopping cart</h4>
            </div>
            <div className="cartmini__close">
               <button type="button" className="cartmini__close-btn" onClick={() => setShopOpen(false)}><i className="fas fa-times"></i></button>
            </div>
            <div className="cartmini__widget">
               <div className="cartmini__inner">
                  <ul>
                     <li>
                        <div className="cartmini__thumb">
                           <a href="#">
                              <img src="assets/img/course/sm/cart-1.jpg" alt="img not found"/>
                           </a>
                        </div>
                        <div className="cartmini__content">
                           <h5><a href="#">Strategy law and organization Foundation </a></h5>
                           <div className="product-quantity mt-10 mb-10">
                                <span className="cart-minus" onClick={decrease}>-</span>
                                <span className="cart-input">{counter}</span>
                                <span className="cart-plus" onClick={increase}>+</span>
                           </div>
                           <div className="product__sm-price-wrapper">
                              <span className="product__sm-price">$46.00</span>
                           </div>
                        </div>
                        <a href="#" className="cartmini__del"><i className="fas fa-times"></i></a>
                     </li>
                     <li>
                        <div className="cartmini__thumb">
                           <a href="#">
                              <img src="assets/img/course/sm/cart-2.jpg" alt="img not found"/>
                           </a>
                        </div>
                        <div className="cartmini__content">
                           <h5><a href="#">Fundamentals of music theory Learn new</a></h5>
                           <div className="product-quantity mt-10 mb-10">
                                <span className="cart-minus" onClick={decreaseee}>-</span>
                                <span className="cart-input">{counterrr}</span>
                                <span className="cart-plus" onClick={increaseee}>+</span>
                           </div>
                           <div className="product__sm-price-wrapper">
                              <span className="product__sm-price">$32.00</span>
                           </div>
                        </div>
                        <a href="#" className="cartmini__del"><i className="fas fa-times"></i></a>
                     </li>
                     <li>
                        <div className="cartmini__thumb">
                           <a href="#">
                              <img src="assets/img/course/sm/cart-3.jpg" alt="img not found"/>
                           </a>
                        </div>
                        <div className="cartmini__content">
                           <h5><a href="#">Strategy law and organization Foundation </a></h5>
                           <div className="product-quantity mt-10 mb-10">
                                <span className="cart-minus" onClick={decreasee}>-</span>
                                <span className="cart-input">{counterr}</span>
                                <span className="cart-plus" onClick={increasee}>+</span>
                           </div>
                           <div className="product__sm-price-wrapper">
                              <span className="product__sm-price">$62.00</span>
                           </div>
                        </div>
                        <a href="#" className="cartmini__del"><i className="fas fa-times"></i></a>
                     </li>
                  </ul>
               </div>
               <div className="cartmini__checkout">
                  <div className="cartmini__checkout-title mb-30">
                     <h4>Subtotal:</h4>
                     <span>$113.00</span>
                  </div>
                  <div className="cartmini__checkout-btn">
                     <Link href="/cart"><a className="e-btn e-btn-border mb-10 w-100"><span></span> view cart</a></Link>
                     <Link href="/checkout"><a className="e-btn w-100"><span></span> checkout</a></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
          
    )
}

export default ShopingCart;