import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

import NProgress from "nprogress";
import CookieConsent from "react-cookie-consent";

import { Menu, Footer } from "../components/";

import "../styles/index.css";


const MyApp = ({ Component, pageProps }: AppProps ): JSX.Element => {
    const router = useRouter();
    
    useEffect(() => {
        const start = ( url : string ) => {
            console.log( router.asPath );
            console.log( url );
            NProgress.start();
        };

        const stop = () =>   {
            NProgress.done();
        };

        router.events.on( "routeChangeStart", start );
        router.events.on( "routeChangeComplete", stop );
        router.events.on( "routeChangeError", stop );
        
        return () => {
            router.events.off( "routeChangeStart", start );
            router.events.off( "routeChangeComplete", stop );
            router.events.off( "routeChangeError", stop );
        };
    }, [ router ]);


    return (
        <>
            <div className="flex justify-center bg-background">
                <div className={"bg-background  h-full min-h-screen max-w-7xl w-full"}>
                    <div className="mx-4 sm:mx-10 h-full min-h-screen flex flex-col justify-between">
                        <Menu />
                        <Component {...pageProps} />
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
                    color: "#F9FAFB",
                    padding: "0 2.75rem"
                }}
                buttonStyle={{
                    color: "#222222",
                    borderRadius: "3px",
                    backgroundColor: "#F1D43B",
                    fontSize: "13px",
                    hoover: "#ece02f"
                }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
        </>
    );
};

export default MyApp;
