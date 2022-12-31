import React from 'react';
import FooterThree from '../../../components/Layout/Footer/FooterStyleTwo';
import Header from '../../../components/Layout/Header/Header';
import AdvisorSection from '../../../components/Advisor/AdvisorsSection'
import ManagementTeam from '../../../components/TwoZeroTwoOne/ManagementTeam';
import PublicityTeam from '../../../components/TwoZeroTwoOne/PublicityTeam';
import MultimediaTeam from '../../../components/TwoZeroTwoOne/MultimediaTeam';
import TechnicalDepartment from '../../../components/TwoZeroTwoOne/TechnicalDepartment';

class Committee2021 extends React.Component {

    render() {
        return (
            <React.Fragment>
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


export default Committee2021;