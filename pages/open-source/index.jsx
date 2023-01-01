import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import PrivacyContent from '../../components/OpenSource/PrivacyContent';
import Breadcrumb from '../../components/Common/Breadcrumb';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Open Source" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <PrivacyContent />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;