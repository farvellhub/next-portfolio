import { NextPage } from "next";

import { Slideshow } from "../components/";


const IndexPage: NextPage = () => {
    return (
        <>
            <div className="fade-out w-full flex justify-items-center flex-wrap">
                <h1 className="text-6xl font-title w-full pb-2 uppercase font-bold bg-clip-text bg-gradient-to-br from-typescript to-pink-400 text-transparent menuMin:text-9xl">
                    Hi visitor!
                </h1>
                <p className="text-xl w-full pb-2 text-whippy menuMin:text-2xl">
                    I&apos;m <span className="text-yellow-600">javascript</span> and <span className="text-typescript">typescript</span> developer focused on website design and frontend development.
                </p>
               
                <p className="text-xl w-full pb-16 menuMin:text-2xl">Below you can see some of my projects.</p>
            </div>

            <div className="py-20 px-10 bg-typescript rounded-sm">
                <Slideshow />
            </div>
        </>
    );
};

export default IndexPage;
