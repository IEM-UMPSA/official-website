import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import TeacherTwo from './TeacherSectionTwo';
import OpenSourceContributor from './OpenSourceContributor';
import Cta from '../Home/CtaSection';


class InstructorMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb pageTitle="Hall of Fame" />
				{/* breadcrumb-end */}

                {/* Teacher-start */}
				<TeacherTwo />
				{/* Teacher-end */}

                {/* cta-start */}
				<OpenSourceContributor />
				{/* cta-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default InstructorMain;