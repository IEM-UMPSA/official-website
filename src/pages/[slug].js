import React from 'react';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';
import BlogDetailsMain from '../components/BlogDetails/BlogDetailsMain';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';

class BlogDetails extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderThree />
                <main>
                    {/* Blog Main */}
                    <BlogDetailsMain />
                    {/* Blog Main End */}
                </main>
                <FooterThree />
            </React.Fragment>
        );
    }
}


export default BlogDetails;

