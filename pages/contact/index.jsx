import React from 'react';
import ContactMain from '../../components/Contact/ContactMain';
import Header from '../../components/Layout/Header/HeaderStyleTwo';
import Footer from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import SEO from '../../components/SEO/index';
class Contact extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Contact Us" 
                pageDescription="Get in touch with the Universiti Malaysia Pekan through our easy-to-use Contact Us page. Find our location in Pekan, Pahang and email us directly at iem@ump.edu.my."
                pageKeywords="Contact Us, location, Universiti Malaysia, Pekan, Pahang, email, iem@ump.edu.my"
                pageImage="/assets/img/page-title/contact.jpg"
                pageURL="https://iemumpss.vercel.app/contact"
                pageImageAlt="IEM-UMPSS Contact Us Page"
            />
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Contact Us" breadCrumbImage="/assets/img/page-title/contact.jpg" />
			{/* breadcrumb-end */}   
            <Header />
            <ContactMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Contact;

