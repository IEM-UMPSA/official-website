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
import { useRouter } from 'next/router';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function BlogDetailsMain(){


        const router = useRouter();
        const { slug } = router.query;
        const { data, error } = useSWR(`/api/blog/${slug}`, fetcher)
    
        if (error) return <div>Failed to load</div>
        if (!data) return <div>Loading...</div>


        return (

            <main  key={data.id}>

            <Head>
                    <title>{`Blog | ${data.title}`}</title>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="description" content={data.metaDescription} />
                    <meta name="keywords" content={data.metaKeywords} />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


                    {/* Google / Search Engine Tags  */}
                    <meta itemprop="name" content={`Blog | ${data.title}`}/>
                    <meta itemprop="description" content={data.metaDescription}/>
                    <meta itemprop="image" content={data.image}/>

                    {/* Facebook Meta Tags  */}
                    <meta property="og:url" content={`https://iemumpss.vercel.app/blog/${data.slug}`}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={`Blog | ${data.title}`}/>
                    <meta property="og:description" content={data.metaDescription}/>
                    <meta property="og:image" content={data.image}/>
                    <meta property="og:keywords" content={data.metaKeywords}></meta>

                    {/* Twitter Meta Tags  */}
                    <meta name="twitter:card" content={`Blog | ${data.title}`}/>
                    <meta name="twitter:title" content={`Blog | ${data.title}`}/>
                    <meta name="twitter:description" content={data.metaDescription}/>
                    <meta name="twitter:image" content={data.image}/>
            
                 
                    <meta name="author" content={data.author}/>
                    <meta name="robots" content="index, follow" />
                </Head>

              
                <Breadcrumb  pageTitle={data.title} breadCrumbImage={data.image}/>
          

                {/* blog-area start */}
                <section className="blog__area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                    <div key={data.id} className="blog__wrapper">
                                        
                                        <BlogDesc  {...data}/>
                                    
                                        <div className="blog__img w-img mb-45" >
                                            <img src={data.image} alt={data.title} />
                                        </div>
                                        <div className="blog__text mb-20">
                                            {/* <h3>{data.title}</h3> */}
                                            <p>{data.text}</p>
                                            <p>{data.textTwo}</p>
                                        </div>


                                        
                                        <div className="blog__line"></div>
                                        <BlogMeta  {...data}/>
                                        <BlogAuthor {...data}/>
                                        <BlogRecent {...data}/>
                                        {/* <LatestComments {...data}/>
                                        <ReplyForm {...data}/> */}
                                    </div>
                              

                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="blog__sidebar pl-70">
                                    {/* <Search /> */}
                                    <RecentPost />
                                    {/* <Category />
                                    <Tags /> */}
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





