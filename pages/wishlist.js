import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import MyWishListMain from '../components/MyWishList/MyWishListMain';

class MyWishList extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <MyWishListMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default MyWishList;