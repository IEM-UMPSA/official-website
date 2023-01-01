import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import FaqArea from '../../components/FAQ/FaqArea';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Frequently Asked Question (FAQ)" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <FaqArea />
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;