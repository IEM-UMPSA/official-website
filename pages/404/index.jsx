import React from 'react';
import ErrorMain from '../../components/Error/ErrorMain';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Header from '../../components/Layout/Header/Header';
import SEO from '../../components/SEO/index';

class Custom404 extends React.Component {

    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Error 404 - Not Found" 
                pageDescription="404 Not Found error page. The requested page cannot be found on the server. Please check the URL and try again or contact the website administrator for assistance."
                pageKeywords="404, Not Found, Error, Page, Missing"
            />
            <Header />
            <ErrorMain />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Custom404;