import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import PrivacyContent from '../../components/OpenSource/PrivacyContent';
import Breadcrumb from '../../components/Common/Breadcrumb';
import SEO from '../../components/SEO/index';

class index extends React.Component {
    render() {
        return (
            <React.Fragment>

            <SEO 
                pageTitle="Open Source" 
                pageDescription="IEM-UMPSS official website is open sourced and maintained by the UMP community. The project aims to nurture a new generation of UMP developers, improve critical, creative and collaborative thinking among students, cultivate professional practice and enhance the contributors' hard skills and experience."
                pageKeywords="open source, IEM-UMPSS, UMP community, project, website, developers, coding problem, C3 thinking, professional practice, hard skills, experience, contribution, clone, git branch, pull request, merge, review, documentation, privacy policy"
            />
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Open Source" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <PrivacyContent />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;