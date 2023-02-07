import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import SEO from '../../components/SEO/index';
import JobListArea from '../../components/JobOpportunity/JobListArea';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Job/Internship Opportunity" 
                pageDescription="Discover job and internship opportunities with IEM-UMP Student Section, the Institution of Engineers Malaysia - UMP Student Section. Join a supportive and dynamic engineering community, gain professional skills and knowledge, and further your career. Apply now and take the next step in your engineering journey."
                pageKeywords="IEM-UMP Student Section, Institution of Engineers Malaysia, UMP, internship, job opportunities."
            />
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Job/Internship Opportunity" breadCrumbImage="/assets/img/page-title/job.jpg"  />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <JobListArea />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;