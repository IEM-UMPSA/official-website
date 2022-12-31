import React from 'react';
import Footer from '../components/Layout/Footer/Footer';
import CourseGridMain from '../components/CourseGrid/CourseGridMain';
import HeaderTwo from '../components/Layout/Header/HeaderStyleTwo';

class CourseGrid extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <CourseGridMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CourseGrid;

