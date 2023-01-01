import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseDetailsMain from '../components/CourseDetails/CourseDetailsMain';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class CourseDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <CourseDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseDetails;

