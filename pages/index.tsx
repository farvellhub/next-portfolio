import React from "react";

import { Slideshow } from "../components/";

const IndexPage = (): JSX.Element => {
    return (
        <>
            <div className="w-full flex justify-items-center flex-wrap">
                <h1 className="text-6xl w-full pt-10 pb-6 uppercase font-bold bg-clip-text bg-gradient-to-br from-typescript to-pink-400 text-transparent menuMin:text-9xl">Hi visitor!</h1>
                <p className="text-2xl pb-2 text-whippy">
                    I&apos;m <span className="text-yellow-600">javascript</span> and <span className="text-blue-600">typescript</span> developer focused on website design and frontend development.
                </p>
                <p className="text-2xl pb-16">Below you can see some of my projects.</p>
                
            </div>

            <div className="py-20 px-10 bg-typescript rounded-sm">
                <Slideshow />
            </div>
        </>
    );
};

export default IndexPage;
