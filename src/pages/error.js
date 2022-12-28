import React from 'react';
import ErrorMain from '../components/Error/ErrorMain';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';

class Error extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

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


export default Error;