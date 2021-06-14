import React from "react";

import { Slideshow } from "../components/";

const IndexPage = (): JSX.Element => {
    return (
        <>
            <div className="w-full flex justify-items-center flex-wrap py-50">
                <h1 className="text-6xl w-full">Hi visitor!</h1>
                <p className="text-2xl mb-16">
                    I&apos;m javascript and typescript developer focused on website design and frontend development.                  
                </p>
            </div>

            <Slideshow />
        </>
    );
};

export default IndexPage;
