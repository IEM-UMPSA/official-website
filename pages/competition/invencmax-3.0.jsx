import React from 'react';
import Header from '../../components/Layout/Header/HeaderStyleTwo';
import CompetitionDetailsMain from '../../components/Competition/CompetitionDetailsMain';
import Footer from '../../components/Layout/Footer/FooterStyleTwo';

class CompetitionDetails extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <Header />
                <CompetitionDetailsMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default CompetitionDetails;