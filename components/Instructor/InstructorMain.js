import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TeacherTwo from './TeacherSectionTwo';
import Banner from '../Home/BannerSection';
import Cta from '../Home/CtaSection';


class InstructorMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Instructor" />
				{/* breadcrumb-end */}

                {/* Teacher-start */}
				<TeacherTwo />
				{/* Teacher-end */}

                {/* cta-start */}
				<Banner />
				{/* cta-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default InstructorMain;