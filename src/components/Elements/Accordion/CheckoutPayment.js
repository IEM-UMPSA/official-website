import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CheckoutPayment = () => {

    return(
        <div className="accordions" id="checkoutAccordions">
            <Accordion className="accodion-style--3" preExpanded={'0'}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h2 className="accordion-header" id="checkoutOne">
                                <button className="accordion-button" type="button">Direct Bank Transfer</button>
                            </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                    <div className="accordion-body">
                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.
                    </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                        <h2 className="accordion-header" id="paymentTwo">
                            <button className="accordion-button collapsed" type="button">Cheque Payment</button>
                        </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                        <div className="accordion-body">
                            Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <h2 className="accordion-header" id="paypalThree">
                                <button className="accordion-button collapsed" type="button">PayPal</button>
                            </h2>
                        </AccordionItemButton>
                    </AccordionItemHeading>

                    <AccordionItemPanel>
                        <div className="accordion-body">
                            Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CheckoutPayment;





