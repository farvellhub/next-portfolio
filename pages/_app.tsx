import type { AppProps } from "next/app";

import CookieConsent from "react-cookie-consent";

import useEventRouter from "../hooks/useEventRouter";
import useLoaded from "../hooks/useLoaded";

import "../styles/index.css";


import {
    Menu,
    Footer,
    Welcome
} from "../components/";



const MyApp = ({ Component, pageProps }: AppProps ): JSX.Element => {
    const loaded = useLoaded();
    useEventRouter();

    return (
        loaded ? (
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
        ) : ( <Welcome /> )
    );
};

export default MyApp;
