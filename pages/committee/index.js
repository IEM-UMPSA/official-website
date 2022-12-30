import React from 'react';
import ErrorMain from '../../../components/Error/ErrorMain';
import FooterThree from '../../../components/Layout/Footer/FooterStyleThree';
import Header from '../../../components/Layout/Header/Header';

class Custom404 extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <ErrorMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Custom404;