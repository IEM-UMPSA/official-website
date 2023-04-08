import React from 'react';
import FooterThree from '../../../components/Layout/Footer/FooterStyleTwo';
import Header from '../../../components/Layout/Header/Header';
import AdvisorSection from '../../../components/Advisor/AdvisorsSection'
import ManagementTeam from '../../../components/TwoOneTwoTwo/ManagementTeam';
import PublicityTeam from '../../../components/TwoOneTwoTwo/PublicityTeam';
import MultimediaTeam from '../../../components/TwoOneTwoTwo/MultimediaTeam';
import TechnicalDepartment from '../../../components/TwoOneTwoTwo/TechnicalDepartment';
import SEO from '../../../components/SEO/index';

class Committee2122 extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <SEO 
                pageTitle="Executive Council 2021/2022" 
                pageDescription= "The 2021/2022 Executive Council of the Institute of Engineers, Malaysia-University of Malaya Postgraduate Society of Students (IEM-UMPSS) represents the leadership of this professional association for engineers in Malaysia. Stay informed and connected with their latest initiatives and programs."
                pageKeywords="Executive Council, 2021/2022, IEM-UMPSS, Leadership, Professional Association, Engineers, Malaysia"
               pageImage="/public/assets/img/committee/2122/group-photo.jpg"
                pageURL="https://iemumpss.vercel.app/executive-council/2122"
                pageImageAlt="IEM-UMPSS Executive Council 2021/2022 Page"
            />
            <Header />
            <AdvisorSection />
            <ManagementTeam />
            <TechnicalDepartment />
            <PublicityTeam />
            <MultimediaTeam />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Committee2122;