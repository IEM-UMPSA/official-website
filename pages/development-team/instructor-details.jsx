import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import InstructorDetailsMain from '../../components/InstructorDetails/InstructorDetailsMain';

class InstructorDetails extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
            <InstructorDetailsMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default InstructorDetails;