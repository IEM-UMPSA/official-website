import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CourseListTab from '../Elements/Tab/CourseListTab';
import Cta from '../Home/CtaSection';


class CourseListMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb />
				{/* breadcrumb-end */}

                {/* course tab-start */}
				<CourseListTab />
				{/* course tab-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default CourseListMain;