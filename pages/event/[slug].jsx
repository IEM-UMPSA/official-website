import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header/HeaderStyleTwo';
import EventDetailsMain from '../../components/EventDetails/EventDetailsMain';

class EventDetails extends React.Component {

    render() {
        return (
            <React.Fragment>
            <Header/>
            <EventDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default EventDetails;