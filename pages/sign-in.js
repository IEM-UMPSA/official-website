import React from 'react';
import FooterTwo from '../components/Layout/Footer/FooterStyleTwo';
import SignInMain from '../components/SignIn/SignInMain';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <SignInMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default SignIn;