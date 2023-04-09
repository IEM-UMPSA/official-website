import React from 'react';
import Header from '../../components/Layout/Header/HeaderStyleTwo';
import BlogDetailsMain from '../../components/BlogDetails/BlogDetailsMain';
import Footer from '../../components/Layout/Footer/FooterStyleTwo';

class BlogDetails extends React.Component {

    render() {
        return (
            <React.Fragment>
                 <Header />
                <BlogDetailsMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default BlogDetails;