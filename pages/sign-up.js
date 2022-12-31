import React from 'react';
import FooterTwo from '../components/Layout/Footer/FooterStyleTwo';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
import SignUpMain from '../components/SignUp/SignUpMain';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <SignUpMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default SignIn;