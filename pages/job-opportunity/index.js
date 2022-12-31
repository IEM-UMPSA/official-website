import React from 'react';
import HeaderThree from '../../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../../components/Layout/Footer/FooterStyleThree';
import Breadcrumb from '../../components/Common/Breadcrumb';
import JobListArea from '../../components/JobOpportunity/JobListArea';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Job/Internship Opportunity" />
			{/* breadcrumb-end */}
            <HeaderThree />
            <JobListArea />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default index;