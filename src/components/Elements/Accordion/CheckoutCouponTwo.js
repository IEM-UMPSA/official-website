import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CheckoutCouponTwo = () => {

    return(
        <div className="coupon-accordion">
            <Accordion className="accodion-style--2" preExpanded={'0'}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h3>Have a coupon? <span id="showcoupon">Click here to enter your code</span></h3>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div id="checkout_coupon" className="coupon-checkout-content">
                           <div className="coupon-info">
                              <form action="#">
                                    <p className="checkout-coupon">
                                       <input type="text" placeholder="Coupon Code" />
                                       <button className="e-btn e-btn-border" type="submit">Apply Coupon</button>
                                    </p>
                              </form>
                           </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CheckoutCouponTwo;





