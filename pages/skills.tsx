import { NextPage } from "next";

import {
    PhotoshopIcon,
    HTMLIcon,
    CSSIcon,
    SassIcon,
    JavascriptIcon,
    TypescriptIcon,
    WebpackIcon,
    BabelIcon,
    PostcssIcon,
    GulpIcon,
    ReactIcon,
    ReduxIcon,
    NextJsIcon,
    TailwindIcon,
    MaterialIcon,
    FigmaIcon
} from "../components/Icons";

const SkillsPage: NextPage = () => {
    return (
        <>
            <div className="w-full flex justify-items-center items-center flex-wrap">
                <h2 className="w-full text-whippy pb-12 uppercase text-6xl menuMin:text-9xl font-bold">
                    My <span className="text-typescript">Skills</span>.
                </h2>

                <div className="w-full flex justify-items-center items-start flex-wrap">
                    <div className="flex justify-center flex-wrap w-full menuMin:w-1/4 sm:w-1/2">
                        <h3 className="w-full text-center text-3xl pb-2 font-bold menuMin:text-4xl">Design</h3>
                        <ul className="text-xl pb-6 menuMin:text-2xl">
                            <li className="flex pb-2">{PhotoshopIcon} <span className="pl-2">Photoshop</span></li>
                            <li className="flex pb-2">{FigmaIcon} <span className="pl-2">Figma</span></li>
                        </ul>
                    </div>
                    <div className="flex justify-center flex-wrap w-full menuMin:w-1/4 sm:w-1/2">
                        <h3 className="w-full text-center text-3xl pb-2 font-bold menuMin:text-4xl">Languages</h3>
                        <ul className="text-xl pb-6 menuMin:text-2xl">
                            <li className="flex pb-2">{HTMLIcon} <span className="pl-2">HTML5</span></li>
                            <li className="flex pb-2">{CSSIcon} <span className="pl-2">CSS3</span></li>
                            <li className="flex pb-2">{SassIcon} <span className="pl-2">SASS</span></li>
                            <li className="flex pb-2">{JavascriptIcon} <span className="pl-2">Javascript</span></li>
                            <li className="flex pb-2">{TypescriptIcon} <span className="pl-2">TypeScript</span></li>
                        </ul>
                    </div>
                    <div className="flex justify-center flex-wrap w-full menuMin:w-1/4 sm:w-1/2">
                        <h3 className="w-full text-center text-3xl pb-2 font-bold menuMin:text-4xl">Tooling</h3>
                        <ul className="text-xl pb-6 menuMin:text-2xl">
                            <li className="flex pb-2">{WebpackIcon} <span className="pl-2">Webpack</span></li>
                            <li className="flex pb-2">{BabelIcon} <span className="pl-2">Babel7</span></li>
                            <li className="flex pb-2">{PostcssIcon} <span className="pl-2">PostCSS</span></li>
                            <li className="flex pb-2">{GulpIcon} <span className="pl-2">Gulp</span></li>
                        </ul>
                    </div>
                    <div className="flex justify-center flex-wrap w-full menuMin:w-1/4 sm:w-1/2">
                        <h3 className="w-full text-center text-3xl pb-2 font-bold menuMin:text-4xl">Technologies</h3>
                        <ul className="text-xl pb-6 menuMin:text-2xl">
                            <li className="flex pb-2">{ReactIcon} <span className="pl-2">React</span></li>
                            <li className="flex pb-2">{ReduxIcon} <span className="pl-2">Redux</span></li>
                            <li className="flex pb-2">{NextJsIcon} <span className="pl-2">Next.js</span></li>
                            <li className="flex pb-2">{TailwindIcon} <span className="pl-2">TailwindCSS</span></li>
                            <li className="flex pb-2">{MaterialIcon} <span className="pl-2">Material UI</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillsPage;