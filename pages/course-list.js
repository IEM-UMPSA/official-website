import React from 'react';
import CourseListMain from '../components/CourseList/CourseListMain';
import Footer from '../components/Layout/Footer/Footer';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class CourseList extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <CourseListMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseList;