import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import CheckoutMain from '../components/Checkout/CheckoutMain';

class Checkout extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <CheckoutMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Checkout;