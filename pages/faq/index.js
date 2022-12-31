import React from 'react';
import HeaderThree from '../../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../../components/Layout/Footer/FooterStyleThree';
import Breadcrumb from '../../components/Common/Breadcrumb';
import FaqArea from '../../components/FAQ/FaqArea';
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Frequently Asked Question (FAQ)" />
			{/* breadcrumb-end */}
            <HeaderThree />
            <FaqArea />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default index;