import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import MyCart from '../components/MyCart/MyCartMain';

class Cart extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <MyCart />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Cart;

