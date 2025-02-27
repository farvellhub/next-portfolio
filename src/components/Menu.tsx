import Link from "next/link";

import {
    RiLinkedinLine,
    RiGithubLine,
    RiMailLine
} from "react-icons/ri";


const Menu = () => {
    return (
        <div className={"pt-6 text-whippy flex flex-wrap font-semibold tracking-widest uppercase mb-16"}>
            <span className="font-bold text-xl font-logo text-center menuMin:float-left w-full menuMin:w-auto">
                <span className="text-typescript">Farvell</span>&apos;s website
            </span>
            <div className={"py-4 menuMin:py-0 w-full md:w-1/2 mx-auto flex flex-wrap justify-around items-center xt-whippy font-normal"} >
                <Link href="#home" className="hover:text-css px-2">HOME</Link>
                <Link href="#projects" className="hover:text-css px-2">PROJECTS</Link>
                <Link href="#skills" className="hover:text-css pl-1">SKILLS</Link>
                <Link href="#about" className="hover:text-css pl-1">ABOUT ME</Link>
            </div>
            <div className=" w-full menuMin:w-32 flex justify-center items-center">
                <div className="flex flex-wrap justify-between w-32">
                    <a href="https://www.linkedin.com/in/adrian-terrasa/" target="_blank" rel="noreferrer">
                        <RiLinkedinLine className="w-6 h-6 text-whippy hover:text-css" />
                    </a>
                    <a href="https://github.com/farvellhub/" target="_blank" rel="noreferrer" >
                        <RiGithubLine className="w-6 h-6 text-whippy hover:text-css" />
                    </a>
                    <a href="mailto:farvellsmurf@gmail.com" target="_blank" rel="noreferrer">
                        <RiMailLine className="w-6 h-6 text-whippy hover:text-css" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
