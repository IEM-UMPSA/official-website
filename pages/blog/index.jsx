import React from 'react';
import Header from '../../components/Layout/Header/HeaderStyleTwo';
import Footer from '../../components/Layout/Footer/FooterStyleTwo';
import BlogMain from '../../components/Blog/BlogMain';
import UnderConstruction from '../../components/UnderConstruction/UnderConstruction';
import Breadcrumb from '../../components/Common/Breadcrumb';
import SEO from '../../components/SEO/index';

class Blog extends React.Component {

    render() {
        return (
            <React.Fragment>
            <SEO 
                pageTitle="Blogs" 
                pageDescription="Explore the latest insights and ideas in engineering with the blog of IEM-UMPSS official website. Stay up-to-date with the latest trends and developments in the field of engineering by reading our blog articles submitted by experts and students in the community."
                pageKeywords="IEM-UMPSS, Engineering, Blog, Engineering Community, Student Blog, Engineering Trends, Engineering Developments, Engineering Insights, Engineering Ideas, Engineering Society"
                pageURL="https://iemumpss.vercel.app/blog"
                pageImage="/assets/img/page-title/blog.jpg"
                pageImageAlt="IEM-UMPSS Blog Page"
            />
            <Breadcrumb pageTitle="Blogs" breadCrumbImage="/assets/img/page-title/blog.jpg"/>
            <Header />
            <BlogMain />           
            <Footer />
            </React.Fragment>
        );
    }
}


export default Blog;

