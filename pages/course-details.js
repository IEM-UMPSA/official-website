import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseDetailsMain from '../components/CourseDetails/CourseDetailsMain';
import HeaderFour from '../components/Layout/Header/HeaderStyleFour';

class CourseDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderFour />
            <CourseDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseDetails;

