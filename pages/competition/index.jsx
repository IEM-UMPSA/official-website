import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import CompetitionListMain from '../../components/CompetitionList/CompetitionListMain';

class CompetitionList extends React.Component {

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <CompetitionListMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CompetitionList;