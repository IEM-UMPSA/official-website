import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Cta from '../Home/CtaSection';
import EventSidebarContent from './EventSidebarContent';


class EventSidebarMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb />
				{/* breadcrumb-end */}

                {/* course tab-start */}
				<EventSidebarContent />
				{/* course tab-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default EventSidebarMain;