import React, { Component } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import CompetitionListTab from '../Elements/Tab/CompetitionListTab';
import Cta from '../Home/CtaSection';


class CompetitionListMain extends Component {

    render() {

        return (
            <main>
	            {/* breadcrumb-start */}
				<Breadcrumb />
				{/* breadcrumb-end */}

                {/* course tab-start */}
				<CompetitionListTab />
				{/* course tab-end */}

                {/* cta-start */}
				<Cta />
				{/* cta-end */}
        	</main>
        );
    }
}

export default CompetitionListMain;