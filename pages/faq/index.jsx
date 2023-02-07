import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import FaqArea from '../../components/FAQ/FaqArea';
import SEO from '../../components/SEO/index';

class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Frequently Asked Question (FAQ)" 
                pageDescription= "Find answers to your questions about IEM, the Institution of Engineers Malaysia. Learn about the function of IEM, the differences between BEM and IEM, the IEM membership application process, P.Eng, recognised degrees, and more in our FAQ section."
                pageKeywords="IEM, Institution of Engineers Malaysia, FAQ, function, BEM, IEM membership, application process, P.Eng, recognised degrees, accredited program."
            />
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Frequently Asked Question (FAQ)" breadCrumbImage="/assets/img/page-title/faq.jpg" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <FaqArea />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;