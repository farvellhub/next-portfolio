import React from "react";
import tw from "twin.macro";

import {
    RiLinkedinLine,
    RiGithubLine,
    RiMailLine
} from "react-icons/ri";


const Wrapper = tw.div`pt-6 text-whippy flex flex-wrap font-semibold tracking-widest uppercase mb-16`;
const Logo = tw.span`font-bold text-xl text-center menuMin:float-left w-full menuMin:w-auto`;
const Links = tw.div`py-4 menuMin:py-0 w-1/2 lg:w-1/4 mx-auto flex flex-wrap justify-around xt-whippy font-normal`;
const SocialWrapper = tw.div`w-full menuMin:w-32 flex justify-center`;
const Social = tw.div`flex flex-wrap justify-between w-32`;


const Menu = (): JSX.Element => {
    return (
        <Wrapper>
            <Logo>
                <span className="text-typescript">Farvell</span>&apos;s website
            </Logo>

            <Links>
                <a href="/" className="hover:text-css">HOME</a>
                <a href="/projects" className="hover:text-css">PROJECTS</a>
            </Links>

            <SocialWrapper>
                <Social>
                    <a href="https://www.linkedin.com/in/adrian-terrasa/" target="_blank" rel="noreferrer">
                        <RiLinkedinLine className={"w-6 h-6 text-whippy hover:text-css"} />
                    </a>
                    <a href="https://github.com/farvellhub/" target="_blank" rel="noreferrer" >
                        <RiGithubLine className={"w-6 h-6 text-whippy hover:text-css"} />
                    </a>
                    <a href="mailto:farvellsmurf@gmail.com" target="_blank" rel="noreferrer">
                        <RiMailLine className={"w-6 h-6 text-whippy hover:text-css"} />
                    </a>
                </Social>
            </SocialWrapper>
        </Wrapper>
    );
};

export default Menu;
