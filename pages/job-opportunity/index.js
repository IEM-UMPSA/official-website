import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import JobListArea from '../../components/JobOpportunity/JobListArea';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Job/Internship Opportunity" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <JobListArea />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;