import React from 'react';
import ErrorMain from '../../components/Error/ErrorMain';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Header from '../../components/Layout/Header/Header';

class Custom404 extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <ErrorMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Custom404;