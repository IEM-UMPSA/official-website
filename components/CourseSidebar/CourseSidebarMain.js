import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Cta from '../Home/CtaSection';
import CourseSidebarContent from './CourseSidebarContent';


class CourseSidebarMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb />
				{/* breadcrumb-end */}

                {/* course tab-start */}
				<CourseSidebarContent />
				{/* course tab-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default CourseSidebarMain;