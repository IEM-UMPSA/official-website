import React, { Component } from 'react';
import Head from 'next/head';
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
import useSWR from 'swr';
import { useRouter } from 'next/router'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function BlogDetailsMain(){


        const router = useRouter();
        const { slug } = router.query;
        const { data, error } = useSWR(`/api/blog/${slug}`, fetcher)
    
        console.log(data)
        if (error) return <div>Failed to load</div>
        console.log(data)
        if (!data) return <div>Loading...</div>


        return (

            <main>
              
                <Head key={data.id}>
                    <title>{data.title}</title>
                    <meta name={data.title} />
                    <meta name="og:title" property="og:title" content={data.title}></meta>
                    <meta name="og:description" property="og:description" content={data.text}></meta>
                    <meta name="twitter:card" content={data.title}></meta>
                    <link rel="canonical" href={'https://iemumpss.vercel.app'+ data.url}></link>
                    <meta property="og:image" content={data.image} />
                </Head>
        

              
                <Breadcrumb key={data.id} pageTitle={data.title} />
          

                {/* blog-area start */}
                <section className="blog__area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                    <div key={data.id} className="blog__wrapper">
                                        <BlogDesc />
                                        <div className="blog__img w-img mb-45" >
                                            <img src={data.image} alt={data.title} />
                                        </div>
                                        <div className="blog__text mb-40">
                                            <h3>{data.title}</h3>
                                            <p>{data.text}</p>
                                            <p>{data.textTwo}</p>
                                        </div>


                                        
                                        <div className="blog__line"></div>
                                        <BlogMeta  />
                                        <BlogAuthor />
                                        <BlogRecent />
                                        <LatestComments />
                                        <ReplyForm />
                                    </div>
                              

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





