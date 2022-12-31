import React from 'react';
import TechnicalDepartment from '../../../components/TwoOneTwoTwo/TechnicalDepartment';
import FooterThree from '../../../components/Layout/Footer/FooterStyleThree';
import Header from '../../../components/Layout/Header/Header';
import AdvisorSection from '../../../components/Advisor/AdvisorsSection'
import ManagementTeam from '../../../components/TwoOneTwoTwo/ManagementTeam';
import PublicityTeam from '../../../components/TwoOneTwoTwo/PublicityTeam';
import MultimediaTeam from '../../../components/TwoOneTwoTwo/MultimediaTeam';

class Custom404 extends React.Component {

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


export default Custom404;