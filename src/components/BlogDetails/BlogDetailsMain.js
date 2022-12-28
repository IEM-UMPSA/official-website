import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import store from '../../redux/store';
import ReactGA from 'react-ga';
import articleDetails from '../../sample-data/blog-posts/single-post.json';
import BlogDesc from './BlogDescSection';
import BlogMeta from './BlogMetaSection';
import BlogAuthor from './BlogAuthorSection';
import BlogRecent from './BlogRecentSection';
import LatestComments from './LatestCommentsSection';
import ReplyForm from './ReplyFormSection';
import Search from '../Blog/SearchSection';
import RecentPost from '../Blog/RecentPostSection';
import Category from '../Blog/CategorySecion';
import Tags from '../Blog/TagsSection';
import SidebarBanner from '../Blog/SidebarBannerSection';
import Breadcrumb from '../Common/Breadcrumb';

class BlogDetailsMain extends Component {

    static async getInitialProps({ query }) {
        const {slug} = query;
        return { slug }
    }

    constructor(props) {
        super(props);
    }

    getDetails() {
        store.dispatch({
            type: 'NEWS_DETAILS_SUCCESS',
            newsDetails: articleDetails
        });
    }

    componentDidMount() {
        this.getDetails();
        ReactGA.initialize('UA-168056874-1', { alwaysSendToDefaultTracker: true });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {

        const { slug, newsDetails} = this.props;

        return (

            <main>
                {newsDetails && newsDetails.map((article, num) => (
                <Head key={num}>
                    <title>{article.title}</title>
                    <meta name={article.title} />
                    <meta name="og:title" property="og:title" content={article.title}></meta>
                    <meta name="og:description" property="og:description" content={article.text}></meta>
                    <meta name="twitter:card" content={article.title}></meta>
                    <link rel="canonical" href={'https://educal.bdevs.net'+ article.url}></link>
                    <meta property="og:image" content={article.image} />
                </Head>
                ))}

                {/* breadcrumb-area-start */}
                {newsDetails && newsDetails.map((article, num) => (
                    <Breadcrumb key={num} pageTitle={article.title} />
                ))}
                {/* breadcrumb-area-start */}

                {/* blog-area start */}
                <section className="blog__area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                {newsDetails && newsDetails.map((article, num) => (
                                    <div key={num} className="blog__wrapper">
                                        <BlogDesc />
                                        <div className="blog__img w-img mb-45" >
                                            <img src={article.image} alt={article.title} />
                                        </div>
                                        <div className="blog__text mb-40">
                                            <h3>{article.title}</h3>
                                            <p>{article.text}</p>
                                            <p>{article.textTwo}</p>
                                        </div>


                                        
                                        <div className="blog__line"></div>
                                        <BlogMeta />
                                        <BlogAuthor />
                                        <BlogRecent />
                                        <LatestComments />
                                        <ReplyForm />
                                    </div>
                                 ))}

                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="blog__sidebar pl-70">
                                    <Search />
                                    <RecentPost />
                                    <Category />
                                    <Tags />
                                    <SidebarBanner />
                                </div>
                            </div>
                        </div>
                    </div>
               </section>
                {/* blog-area end */}
            </main>

        );
    }
}

const mapStateToProps = (state) => {
    const { newsDetails } = state.newsDetails;
    return { newsDetails }
};

export default connect(mapStateToProps)(BlogDetailsMain);


