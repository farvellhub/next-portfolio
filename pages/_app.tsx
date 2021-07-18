import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import tw from "twin.macro";

import CookieConsent from "react-cookie-consent";

import { Menu, Footer } from "../components/";

import "../styles/index.css";


const App = tw.div`flex justify-center bg-background`;
const Wrapper = tw.div`bg-background  h-full min-h-screen max-w-7xl w-full`;
const Responsive = tw.div`mx-4 sm:mx-10 h-full min-h-screen flex flex-col justify-between`;


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
            <App>
                <Wrapper>
                    <Responsive>
                        <Menu />
                        <Component {...pageProps} />
                        <Footer />
                    </Responsive>
                </Wrapper>
            </App>
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
