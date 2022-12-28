import React from 'react';
import InstructorMain from '../components/Instructor/InstructorMain';
import Footer from '../components/Layout/Footer/Footer';
import HeaderThree from '../components/Layout/Header/HeaderStyleThree';

class Instructor extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderThree />
                <InstructorMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default Instructor;