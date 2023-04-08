import React from 'react';
import TechnicalDepartment from '../../../components/TwoTwoTwoThree/TechnicalDepartment';
import FooterTwo from '../../../components/Layout/Footer/FooterStyleTwo';
import Header from '../../../components/Layout/Header/Header';
import AdvisorSection from '../../../components/Advisor/AdvisorsSection'
import ManagementTeam from '../../../components/TwoTwoTwoThree/ManagementTeam';
import PublicityTeam from '../../../components/TwoTwoTwoThree/PublicityTeam';
import UTMTeam from '../../../components/TwoTwoTwoThree/UTMTeam';
import SEO from '../../../components/SEO/index';

import MultimediaTeam from '../../../components/TwoTwoTwoThree/MultimediaTeam';

class Committee2223 extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <SEO 
                pageTitle="Executive Council 2022/2023" 
                pageDescription= "The 2022/2023 Executive Council of the Institute of Engineers, Malaysia-University of Malaya Postgraduate Society of Students (IEM-UMPSS) represents the leadership of this professional association for engineers in Malaysia. Stay informed and connected with their latest initiatives and programs."
                pageKeywords="Executive Council, 2022/2023, IEM-UMPSS, Leadership, Professional Association, Engineers, Malaysia"
              pageImage="/public/assets/img/committee/2122/group-photo.jpg"
                pageURL="https://iemumpss.vercel.app/executive-council/2223"
                pageImageAlt="IEM-UMPSS Executive Council 2022/2023 Page"
            />
            <AdvisorSection />
            <ManagementTeam />
            <TechnicalDepartment />
            <MultimediaTeam />
            <PublicityTeam />
            <UTMTeam />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Committee2223;