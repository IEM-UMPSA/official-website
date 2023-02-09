import './index.scss';
import App from 'next/app';
import Router from 'next/router';

import React from 'react';
// import { loadIcons } from '../utils/IconLoader';
import ErrorBoundary from '../components/ErrorBoundary';
// loadIcons();
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Script from 'next/script';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
class MyApp extends App {

    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return { pageProps: pageProps };
    }

    render() {
        //Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
        const { Component, pageProps } = this.props;

        return (
               
            <ErrorBoundary>
                <Component {...pageProps} />

                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-BRBBYXSR48" />

                <Script id="google-analytics" strategy="afterInteractive">       
                    {`
                
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', 'G-BRBBYXSR48');
                
                    `}
                </Script>
                <Script id="tawk" strategy="afterInteractive">       
                    {`
                        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                        (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/6374fb4fb0d6371309cf5ea7/1gi0fbbnv';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                        })();
                    `}
                </Script>


            </ErrorBoundary>
        )
    }
}

export default MyApp;
