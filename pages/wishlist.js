import React from 'react';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../components/Layout/Footer/FooterStyleTwo';
import MyWishListMain from '../components/MyWishList/MyWishListMain';

class MyWishList extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <MyWishListMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default MyWishList;