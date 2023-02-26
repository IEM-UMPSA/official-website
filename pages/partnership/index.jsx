import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import SEO from '../../components/SEO/index';
import ServiceDetailsArea from '../../components/Service-details/ServiceDetailsArea';
import ServiceContact from '../../components/Service-details/ServiceContact';
import dynamic from 'next/dynamic';
const BrandWithNoSSR = dynamic(() => import('../../components/Elements/Brand/BrandSection'), {
    ssr: false
  })
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Partnership" 
                pageDescription="Join IEM-UMP Student Section, the Institution of Engineers Malaysia - UMP Student Section, and advance the science and profession of engineering. Collaborate with universities, clubs, companies, and individuals to share knowledge and ideas. Find professional development, networking opportunities, and more. Contact us for internships and job opportunities."
                pageKeywords="IEM-UMP Student Section, Institution of Engineers Malaysia, UMP, engineering society, professional skills, knowledge, values, engineering students, welfare, networking, future engineers, university clubs, engineering society, university club, IEM Student Sections, engineering companies, technology companies, internship, job opportunities."
                pageImage="/assets/img/page-title/partnership.jpg"
                pageURL="https://iemumpss.vercel.app/partnership"
            />
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Partnership" breadCrumbImage="/assets/img/page-title/partnership.jpg" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <ServiceDetailsArea/>
            <BrandWithNoSSR />
            <ServiceContact/>
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;