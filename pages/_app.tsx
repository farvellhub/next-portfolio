import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

import { Menu, Footer } from "../components/";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps ): JSX.Element {
    Router.events.on( "routeChangeStart", () => NProgress.start());
    Router.events.on( "routeChangeComplete", () => NProgress.done());
    Router.events.on( "routeChangeError", () => NProgress.done());
    
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146649922-1" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-146649922-1');
                        `
                    }}
                />
            </Head>
            <div className="flex justify-center bg-background ">
                <div className={"bg-background  h-full min-h-screen max-w-7xl w-full"}>
                    <div className="mx-4 sm:mx-10 h-full min-h-screen flex flex-col justify-between">
                        <div>
                            <Menu />
                            <Component {...pageProps} />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default MyApp;
