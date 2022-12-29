import React from 'react';
import ErrorMain from '../components/Error/ErrorMain';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';

class Custom404 extends React.Component {

    render() {
        return (
            <React.Fragment>
            <HeaderFour />
            <ErrorMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Custom404;