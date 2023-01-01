import React from 'react';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import FooterTwo from '../../components/Layout/Footer/FooterStyleTwo';
import BlogMain from '../../components/Blog/BlogMain';

class Blog extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

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

