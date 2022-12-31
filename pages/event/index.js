import React from 'react';
import EventSidebarMain from '../../components/EventSidebar/EventSidebarMain';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderThree from '../../components/Layout/Header/HeaderStyleThree';

class Event extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderThree />
            <EventSidebarMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default Event;