import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import EventDetailsMain from '../../components/EventDetails/EventDetailsMain';

class EventDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <EventDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default EventDetails;