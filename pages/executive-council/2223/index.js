import React from 'react';
import TechnicalDepartment from '../../../components/TwoTwoTwoThree/TechnicalDepartment';
import FooterThree from '../../../components/Layout/Footer/FooterStyleThree';
import Header from '../../../components/Layout/Header/Header';
import AdvisorSection from '../../../components/Advisor/AdvisorsSection'
import ManagementTeam from '../../../components/TwoTwoTwoThree/ManagementTeam';
import PublicityTeam from '../../../components/TwoTwoTwoThree/PublicityTeam';
import UTMTeam from '../../../components/TwoTwoTwoThree/UTMTeam';

import MultimediaTeam from '../../../components/TwoTwoTwoThree/MultimediaTeam';

class Custom404 extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header />
            <AdvisorSection />
            <ManagementTeam />
            <TechnicalDepartment />
            <MultimediaTeam />
            <PublicityTeam />
            <UTMTeam />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default Custom404;