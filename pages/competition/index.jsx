import React from 'react';
import Footer from '../../components/Layout/Footer/Footer';
import HeaderTwo from '../../components/Layout/Header/HeaderStyleTwo';
import CompetitionListMain from '../../components/Competition/CompetitionListMain';
import SEO from '../../components/SEO/index';

class CompetitionList extends React.Component {

    render() {
        return (
            <React.Fragment>
            <HeaderTwo />
           <SEO 
                pageTitle="Events" 
                pageDescription="Discover the latest competiton happening."
                pageKeywords="Competition, UTM, IEM-UTM, Invencmax 3.0."
                pageImage="https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-campus-sports-promotion-poster-background-material-image_134091.jpg"
                pageURL="https://iemumpss.vercel.app/competition"
                pageImageAlt="IEM-UMPSS Competitions Page"
            
            />
\            <CompetitionListMain />
            <Footer />
            </React.Fragment>
        );
    }
}


export default CompetitionList;