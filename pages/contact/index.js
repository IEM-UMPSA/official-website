import React from 'react';
import ContactMain from '../../components/Contact/ContactMain';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';

class Contact extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <ContactMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Contact;

