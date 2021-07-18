import React from "react";
import tw from "twin.macro";

import { Slideshow } from "../components/";


const Wrapper = tw.div`w-full flex justify-items-center flex-wrap pb-16`;
const Heading = tw.h1`text-6xl w-full pt-10 pb-6 uppercase font-bold bg-clip-text bg-gradient-to-br from-typescript to-pink-400 text-transparent menuMin:text-9xl`;
const Paragraph = tw.p`text-2xl pb-2 text-whippy`;
const BlueWrapper = tw.div`py-20 px-10 bg-typescript rounded-sm`;


const IndexPage = (): JSX.Element => {
    return (
        <>
            <Wrapper>
                <Heading>
                    Hi visitor!
                </Heading>

                <Paragraph>
                    I&apos;m <span className="text-yellow-600">javascript</span> and <span className="text-blue-600">typescript</span> developer focused on website design and frontend development.
                </Paragraph>

                <Paragraph>Below you can see some of my projects.</Paragraph>
            </Wrapper>

            <BlueWrapper>
                <Slideshow />
            </BlueWrapper>
        </>
    );
};

export default IndexPage;
