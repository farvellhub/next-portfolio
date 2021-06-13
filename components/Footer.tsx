import React from "react";
import { SiReact, SiTailwindcss, SiNextDotJs } from "react-icons/si";
import { BsLightningFill } from "react-icons/bs";

const Footer = (): JSX.Element => {
    return (
        <div className="mt-16 mb-10  uppercase tracking-widest text-right text-whippy flex justify-between flex-wrap">
            <div className="flex">
                Built with
                <div className="flex ml-2 mt-1">
                    <SiReact className="text-react" /> <SiNextDotJs className="mx-1 " />
                    <SiTailwindcss className="text-tailwind" />
                </div>
            </div>

            <div className="flex">
                <BsLightningFill className="text-firebase mt-1" /> <span className="mx-1">by</span>
                <a href="https://github.com/farvellhub/next-portfolio" className="underline" target="_blank" rel="noreferrer">
                    {" "}
                    netlify
                </a>
            </div>
        </div>
    );
};

export default Footer;
