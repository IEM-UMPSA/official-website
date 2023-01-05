import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import BlogMain from '../../components/Blog/BlogMain';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';
import Breadcrumb from '../../components/Common/Breadcrumb';

class Blog extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <Breadcrumb pageTitle="Blog" />

            <UnderConstruction />
            {/* <BlogMain /> */}
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Blog;

