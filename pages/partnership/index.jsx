import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import Breadcrumb from '../../components/Common/Breadcrumb';
import ServiceDetailsArea from '../../components/Service-details/ServiceDetailsArea';
import ServiceContact from '../../components/Service-details/ServiceContact';
import dynamic from 'next/dynamic';
const BrandWithNoSSR = dynamic(() => import('../../components/Elements/Brand/BrandSection'), {
    ssr: false
  })
class index extends React.Component {
    render() {
        return (
            <React.Fragment>
            {/* breadcrumb-start */}
			<Breadcrumb pageTitle="Partnership" />
			{/* breadcrumb-end */}
            <HeaderTwo />
            <ServiceDetailsArea/>
            <BrandWithNoSSR />
            <ServiceContact/>
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default index;