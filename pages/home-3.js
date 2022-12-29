import React from 'react';
import HomeThreeMain from '../components/HomeThree/HomeThreeMain';
import FooterThree from '../components/Layout/Footer/FooterStyleThree';
import HeaderStyleFive from '../components/Layout/Header/HeaderStyleFive';


class HomeThree extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
            <HeaderStyleFive />
            <HomeThreeMain />
            <FooterThree />
            </React.Fragment>
        );
    }
}


export default HomeThree;

