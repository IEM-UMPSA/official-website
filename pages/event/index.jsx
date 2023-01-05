import React from 'react';
import EventSidebarMain from '../../components/EventSidebar/EventSidebarMain';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import EventSection from '../../components/Home/EventSection';
import Breadcrumb from '../../components/Common/Breadcrumb';


class Event extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <Breadcrumb pageTitle="Events" />
            <EventSection />
            {/* <EventSidebarMain /> */}
            <Footer />
            </React.Fragment>
        );
    }
}


export default Event;