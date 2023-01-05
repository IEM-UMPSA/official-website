import React from 'react';
import FooterTwo from '../components/Layout/Footer/FooterStyleTwo';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';
import SignUpMain from '../components/SignUp/SignUpMain';
import UnderConstruction from '../components/UnderConstruction/UnderConstruction';

class SignIn extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <UnderConstruction />

            {/* <SignUpMain /> */}
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default SignIn;