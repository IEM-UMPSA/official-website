import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';
import EventDetailsMain from '../components/EventDetails/EventDetailsMain';

class EventDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderFour />
            <EventDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default EventDetails;