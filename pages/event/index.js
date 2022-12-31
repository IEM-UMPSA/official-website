import React from 'react';
import EventSidebarMain from '../../components/EventSidebar/EventSidebarMain';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';

class Event extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <EventSidebarMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Event;