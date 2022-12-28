import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Link from 'next/link';


class MyWishListMain extends Component {
    
    render() {
        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb pageTitle="My Wishlist" />
				{/* breadcrumb-end */}

                <section className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <form action="#">
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
                                                    <td className="product-name"><Link href="/course-details"><a>Fundamentals of music theory Learn new</a></Link></td>
                                                    <td className="product-price"><span className="amount">$130.00</span></td>
                                                    <td className="product-quantity">
                                                            <button className="e-btn e-btn-border" type="submit">Add TO Cart</button>
                                                    </td>
                                                    <td className="product-subtotal"><span className="amount">$130.00</span></td>
                                                    <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-thumbnail"><Link href="/course-details"><a><img src="assets/img/course/sm/cart-2.jpg" alt="img not found"/></a></Link></td>
                                                    <td className="product-name"><Link href="/course-details"><a>Strategy law and organization Foundation</a></Link></td>
                                                    <td className="product-price"><span className="amount">$120.50</span></td>
                                                    <td className="product-quantity">
                                                            <button className="e-btn e-btn-border" type="submit">Add TO Cart</button>
                                                    </td>
                                                    <td className="product-subtotal"><span className="amount">$120.50</span></td>
                                                    <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

        	</main>
        );
    }
}

export default MyWishListMain;