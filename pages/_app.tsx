import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";

import { Menu, Footer } from "../components/";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps ): JSX.Element {    
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
            <CookieConsent
                location="bottom"
                buttonText="I understand!"
                
                cookieName="cookie"
                style={{
                    background: "#222222",
                    color: "#EEEEEE",
                    padding: "0 2.75rem"
                }}
                buttonStyle={{
                    color: "#222222",
                    borderRadius: "3px",
                    backgroundColor: "#E1D43B",
                    fontSize: "13px",
                    hoover: "#D0C32C"
                }}
                expires={150}
            >
  This website uses cookies to enhance the user experience.{" "}                
            </CookieConsent>
        </>
    );
}

export default MyApp;
