import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CheckoutCoupon from '../Elements/Accordion/CheckoutCoupon';
import CheckoutCouponTwo from '../Elements/Accordion/CheckoutCouponTwo';
import CheckoutPayment from '../Elements/Accordion/CheckoutPayment';


class CheckoutMain extends Component {
    
    render() {
        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Checkout" />
				{/* breadcrumb-end */}

                <section className="coupon-area pt-100 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <CheckoutCoupon />
                            </div>
                            <div className="col-md-6">
                                <CheckoutCouponTwo />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="checkout-area pb-70">
                    <div className="container">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="checkbox-form">
                                        <h3>Billing Details</h3>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="country-select">
                                                    <label>Country <span className="required">*</span></label>
                                                    <select>
                                                        <option value="volvo">bangladesh</option>
                                                        <option value="saab">Algeria</option>
                                                        <option value="mercedes">Afghanistan</option>
                                                        <option value="audi">Ghana</option>
                                                        <option value="audi2">Albania</option>
                                                        <option value="audi3">Bahrain</option>
                                                        <option value="audi4">Colombia</option>
                                                        <option value="audi5">Dominican Republic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>First Name <span className="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Last Name <span className="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <label>Company Name</label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <label>Address <span className="required">*</span></label>
                                                    <input type="text" placeholder="Street address" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list">
                                                    <label>Town / City <span className="required">*</span></label>
                                                    <input type="text" placeholder="Town / City" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>State / County <span className="required">*</span></label>
                                                    <input type="text" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Postcode / Zip <span className="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Email Address <span className="required">*</span></label>
                                                    <input type="email" placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="checkout-form-list">
                                                    <label>Phone <span className="required">*</span></label>
                                                    <input type="text" placeholder="Phone " />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="checkout-form-list create-acc">
                                                    <input id="cbox" type="checkbox" />
                                                    <label>Create an account?</label>
                                                </div>
                                                <div id="cbox_info" className="checkout-form-list create-account">
                                                    <p>Create an account by entering the information below. If you are a returning
                                                        customer please login at the top of the page.</p>
                                                    <label>Account password <span className="required">*</span></label>
                                                    <input type="password" placeholder="password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="different-address">
                                            <div className="ship-different-title">
                                                <h3>
                                                    <label>Ship to a different address?</label>
                                                    <input id="ship-box" type="checkbox" />
                                                </h3>
                                            </div>
                                            <div id="ship-box-info">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="country-select">
                                                            <label>Country <span className="required">*</span></label>
                                                            <select>
                                                                <option value="volvo">bangladesh</option>
                                                                <option value="saab">Algeria</option>
                                                                <option value="mercedes">Afghanistan</option>
                                                                <option value="audi">Ghana</option>
                                                                <option value="audi2">Albania</option>
                                                                <option value="audi3">Bahrain</option>
                                                                <option value="audi4">Colombia</option>
                                                                <option value="audi5">Dominican Republic</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>First Name <span className="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Last Name <span className="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Company Name</label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Address <span className="required">*</span></label>
                                                            <input type="text" placeholder="Street address" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <label>Town / City <span className="required">*</span></label>
                                                            <input type="text" placeholder="Town / City" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>State / County <span className="required">*</span></label>
                                                            <input type="text" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Postcode / Zip <span className="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Email Address <span className="required">*</span></label>
                                                            <input type="email" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <label>Phone <span className="required">*</span></label>
                                                            <input type="text" placeholder="Postcode / Zip" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order-notes">
                                                <div className="checkout-form-list">
                                                    <label>Order Notes</label>
                                                    <textarea id="checkout-mess" cols="30" rows="10"
                                                        placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="your-order mb-30 ">
                                        <h3>Your order</h3>
                                        <div className="your-order-table table-responsive">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Vestibulum suscipit <strong className="product-quantity"> × 1</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">$165.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Vestibulum dictum magna <strong className="product-quantity"> × 1</strong>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">$50.00</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Cart Subtotal</th>
                                                        <td><span className="amount">$215.00</span></td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Shipping</th>
                                                        <td>
                                                            <ul>
                                                                <li>
                                                                    <input type="radio" />
                                                                    <label>
                                                                        Flat Rate: <span className="amount">$7.00</span>
                                                                    </label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" />
                                                                    <label>Free Shipping:</label>
                                                                </li>
                                                                <li></li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Order Total</th>
                                                        <td><strong><span className="amount">$215.00</span></strong>
                                                        </td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>

                                        <div className="payment-method">
                                            <CheckoutPayment />
                                            <div className="order-button-payment mt-20">
                                                <button type="submit" className="e-btn e-btn-border">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

        	</main>
        );
    }
}

export default CheckoutMain;