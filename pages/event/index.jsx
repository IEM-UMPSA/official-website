import React from 'react';
import EventSidebarMain from '../../components/EventSidebar/EventSidebarMain';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import EventSection from '../../components/Home/EventSection';
import Breadcrumb from '../../components/Common/Breadcrumb';
import SEO from '../../components/SEO/index';


class Event extends React.Component {
    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <SEO 
                pageTitle="Events" 
                pageDescription="Discover the latest events hosted by IEM-UMPSS - the Institution of Engineers Malaysia University of Malaysia Pahang Student Section. Attend our workshops, engineering talks, site visits, games, conferences and more to gain knowledge and experiences in the engineering field."
                pageKeywords="IEM-UMPSS, events, engineering, workshops, talks, site visits, games, conferences, knowledge, experiences, student section, Institution of Engineers Malaysia, University of Malaysia Pahang."
            />
            <Breadcrumb pageTitle="Events" />
            <EventSection />
            {/* <EventSidebarMain /> */}
            <Footer />
            </React.Fragment>
        );
    }
}


export default Event;