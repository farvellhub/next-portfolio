import {
    RiTailwindCssFill,
    RiNextjsFill,
} from "react-icons/ri";

import { SiTypescript } from "react-icons/si";
import { BsLightningFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="mt-16 mb-10 uppercase tracking-widest text-right text-whippy flex justify-between flex-wrap">
            <div className="flex">
                Built with
                <div className="flex ml-2 mt-1">
                    <RiNextjsFill className="mx-1 text-black" />
                    <RiTailwindCssFill className="text-tailwind mx-1" />
                    <SiTypescript className="text-typescript mx-1" />
                </div>
            </div>

            <div className="flex">
                <BsLightningFill className="text-firebase mt-1" /> <span className="mx-1">by</span>
                <a
                    href="https://github.com/farvellhub/next-portfolio"
                    className="hover:text-css"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    Farvell
                </a>
            </div>
        </div>
    );
};

export default Footer;
