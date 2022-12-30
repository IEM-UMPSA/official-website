import React from 'react';
import HeaderThree from '../../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../../components/Layout/Footer/FooterStyleThree';
import PrivacyContent from '../../components/OpenSource/PrivacyContent';
import Breadcrumb from '../../components/Common/Breadcrumb';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Open Source" />
			{/* breadcrumb-end */}
            <HeaderThree />
            <PrivacyContent />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default index;