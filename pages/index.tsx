import React from "react";

import { Slideshow } from "../components/";

const IndexPage = (): JSX.Element => {
    return (
        <>
            <div className="w-full flex justify-items-center flex-wrap px-4">
                <h1 className="text-6xl w-full py-8">Hi visitor!</h1>
                <p className="text-2xl pb-2">
                    I&apos;m <span className="text-yellow-600">javascript</span> and <span className="text-blue-600">typescript</span> developer focused on website design and frontend development.
                </p>
                <p className="text-2xl pb-16">Below you can see some of my projects.</p>
                
            </div>

            <Slideshow />
        </>
    );
};

export default IndexPage;
