import React from 'react';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';
import SEO from '../components/SEO/index';

class Index extends React.Component {


    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Home" 
                pageDescription="Join IEM-UMPSS, the Institution of Engineers Malaysia – University of Malaysia Pahang Student Section, and connect with engineers, institutions, and professionals. Celebrating 10 years, IEM-UMPSS provides students opportunities for professional development and exposure to the engineering industry." 
                pageKeywords="iemumpss, iem-umpss, iem ump, IEM-UMPSS, Institution of Engineers Malaysia, University of Malaysia Pahang Student Section, engineering, students, professional development, exposure, engineers, institutions, professionals, workshops, site visits, conferences, 10 years anniversary"
                pageImage="/public/assets/img/main.jpg"
                pageURL="https://iemumpss.tech"
                pageImageAlt="IEM-UMPSS Main Page"
            />
            <Header />
            
            <HomeMain />
        

            <Footer />

            </React.Fragment>
        );
    }
}




export default Index;

