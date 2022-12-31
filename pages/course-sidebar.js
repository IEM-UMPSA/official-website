import React from 'react';
import CourseSidebarMain from '../components/CourseSidebar/CourseSidebarMain';
import Footer from '../components/Layout/Footer/Footer';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class CourseSidebar extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <CourseSidebarMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseSidebar;