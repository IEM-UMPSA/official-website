import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import BlogMain from '../../components/Blog/BlogMain';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';
import Breadcrumb from '../../components/Common/Breadcrumb';

class Blog extends React.Component {

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <BlogMain />           
            <FooterTwo />
            </React.Fragment>
        );
    }
}


export default Blog;

