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
                pageImage="https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-upcoming-events-speech-bubble-for-vector-id1014979740?k=6&m=1014979740&s=612x612&w=0&h=0tAIYtwKFA6ttu67JTxo-2_IE1lBt89F2q0YCnUVJ04="
                pageURL="https://iemumpss.vercel.app/event"
            
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