import './index.scss';
import App from 'next/app';
import Router from 'next/router';

import { Provider } from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from '../redux/store';
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
        const { Component, pageProps, store } = this.props;

        return (
               
                    <Provider store={store}>
                        <Script src='https://embed.tawk.to/6374fb4fb0d6371309cf5ea7/1gi0fbbnv' />
                        <ErrorBoundary>
                            <Component {...pageProps} />
                        </ErrorBoundary>
                    </Provider>
        )
    }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);

