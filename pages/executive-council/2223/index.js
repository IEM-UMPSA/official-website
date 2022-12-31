import React from 'react';
import TechnicalDepartment from '../../../components/TwoTwoTwoThree/TechnicalDepartment';
import FooterTwo from '../../../components/Layout/Footer/FooterStyleTwo';
import Header from '../../../components/Layout/Header/Header';
import AdvisorSection from '../../../components/Advisor/AdvisorsSection'
import ManagementTeam from '../../../components/TwoTwoTwoThree/ManagementTeam';
import PublicityTeam from '../../../components/TwoTwoTwoThree/PublicityTeam';
import UTMTeam from '../../../components/TwoTwoTwoThree/UTMTeam';

import MultimediaTeam from '../../../components/TwoTwoTwoThree/MultimediaTeam';

class Committee2223 extends React.Component {

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
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Committee2223;