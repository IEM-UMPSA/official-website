import React from 'react';
import HeaderThree from '../../components/Layout/Header/HeaderStyleThree';
import FooterThree from '../../components/Layout/Footer/FooterStyleThree';
import Breadcrumb from '../../components/Common/Breadcrumb';
import ServiceDetailsArea from '../../components/Service-details/ServiceDetailsArea';
import ServiceContact from '../../components/Service-details/ServiceContact';

class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Partnership" />
			{/* breadcrumb-end */}
            <HeaderThree />
            <ServiceDetailsArea/>
            <ServiceContact/>
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default index;