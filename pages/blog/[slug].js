import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import BlogDetailsMain from '../../components/BlogDetails/BlogDetailsMain';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';

class BlogDetails extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <FooterTwo />
                <main>
                    {/* Blog Main */}
                    <BlogDetailsMain />
                    {/* Blog Main End */}
                </main>
                <HeaderTwo />
            </React.Fragment>
        );
    }
}


export default BlogDetails;

