import React from 'react';
import DeveloperMain from '../../components/Developer/DeveloperMain';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';

class Instructor extends React.Component {

    static getInitialProps({ store }) { }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderTwo />
                <DeveloperMain />
                <Footer />
            </React.Fragment>
        );
    }
}


export default Instructor;