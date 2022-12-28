import React, { Component } from 'react';
import { useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';


class MyCart extends Component {
    state = {
        num: 0,
        numA: 0,
    }

    handleIncrease = () => {
        console.log("hello increase")
        this.setState({
            num: this.state.num + 1,
        })

    }

    handleDecrease = () => {
        console.log("hello decrease")
        this.setState({
            num: this.state.num - 1,
        })
    }

    handleIncreaseA = () => {
        console.log("hello increase")
        this.setState({
            numA: this.state.numA + 1,
        })

    }

    handleDecreaseA = () => {
        console.log("hello decrease")
        this.setState({
            numA: this.state.numA - 1,
        })
    }
    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb pageTitle="My Cart" />
				{/* breadcrumb-end */}

                <section className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Images</th>
                                                <th className="cart-product-name">Product</th>
                                                <th className="product-price">Unit Price</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-subtotal">Total</th>
                                                <th className="product-remove">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/course/sm/cart-1.jpg" alt="img not found"/></a></Link></td>
                                                <td className="product-name"><Link href="/course-details"><a>Strategy law and organization Foundation</a></Link></td>
                                                <td className="product-price"><span className="amount">$130.00</span></td>
                                                <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                    <div className="product-quantity-form">
                                                        <button className="cart-minus" onClick={this.handleDecrease}><i className="fas fa-minus"></i></button>
                                                        <p>{this.state.num}</p>
                                                        <button className="cart-plus" onClick={this.handleIncrease}><i className="fas fa-plus"></i></button>
                                                    </div>
                                                </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$130.00</span></td>
                                                <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/course/sm/cart-2.jpg"  alt="img not found"/></a></Link></td>
                                                <td className="product-name"><Link href="/course-details"><a>Fundamentals of music theory Learn new</a></Link></td>
                                                <td className="product-price"><span className="amount">$120.50</span></td>
                                                <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                    <div className="product-quantity-form">
                                                        <button className="cart-minus" onClick={this.handleDecreaseA}><i className="fas fa-minus"></i></button>
                                                        <p>{this.state.numA}</p>
                                                        <button className="cart-plus" onClick={this.handleIncreaseA}><i className="fas fa-plus"></i></button>
                                                    </div>
                                                </div>
                                                </td>
                                                <td className="product-subtotal"><span className="amount">$120.50</span></td>
                                                <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="coupon-all">
                                            <div className="coupon d-sm-flex align-items-center">
                                                <input id="coupon_code" className="input-text" name="coupon_code" 
                                                    placeholder="Coupon code" type="text"/>
                                                <button className="e-btn" name="apply_coupon" type="submit">Apply
                                                    coupon</button>
                                            </div>
                                            <div className="coupon2">
                                                <button className="e-btn" name="update_cart" type="submit">Update cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-5 ml-auto">
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul className="mb-20">
                                                <li>Subtotal <span>$250.00</span></li>
                                                <li>Total <span>$250.00</span></li>
                                            </ul>
                                            <Link href="/checkout"><a className="e-btn e-btn-border">Proceed to checkout</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        	</main>
        );
    }
}

export default MyCart;