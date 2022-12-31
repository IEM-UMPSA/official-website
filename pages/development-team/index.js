import React from 'react';
import DeveloperMain from '../../components/Developer/DeveloperMain';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderThree from '../../components/Layout/Header/HeaderStyleThree';

class Instructor extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderThree />
                <DeveloperMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default Instructor;