import React from "react";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaTrophy,
    FaVuejs
} from "react-icons/fa";

import {
    SiRedux,
    SiTailwindcss,
    SiNextDotJs,
    SiJavascript,
    SiTypescript,
    SiWebgl,
    SiVuetify
} from "react-icons/si";

import { IoIosTime } from "react-icons/io";

import {
    FeaturedProjectCard,
    HorizontalCard
} from "../../components/";

//border-b-2 border-yikyak
const Projects = (): JSX.Element => {
    const CSSIcon = <FaCss3Alt className="text-4xl text-css" />;
    const HTMLIcon = <FaHtml5 className="text-4xl text-html" />;
    const ReactIcon = <FaReact className="text-4xl text-react" />;
    const NodeIcon = <FaNodeJs className="text-4xl text-node" />;
    const ReduxIcon = <SiRedux className="text-3xl text-redux" />;
    const NextJsIcon = <SiNextDotJs className="text-3xl text-black" />;
    const JavascriptIcon = <SiJavascript className="text-3xl text-javascript" />;
    const TailwindIcon = <SiTailwindcss className="text-3xl text-tailwind" />;
    const TypescriptIcon = <SiTypescript className="text-3xl text-css" />;
    const WebGlIcon = <SiWebgl className="text-3xl text-black" />;
    const VueJslIcon = <FaVuejs className="text-3xl text-vuejs" />;
    const VuetifylIcon = <SiVuetify className="text-3xl text-css" />;

    const projects = [
        {
            title: "Sa Serradora",
            info:
                "Template for modern carpentry website.",
            imgSrc: "",
            icons: [ ReactIcon, ReduxIcon, NodeIcon ],
            code: "https://github.com/farvellhub/serradora",
            demo: "https://kikoterrasa.github.com",
        },
        {
            title: "Yokogawa Production Management Portal",
            imgSrc: "https://emanuallan.github.io/img/yoko.jpg",
            info:
                "Real e-shop made consuming Commerce.js API.",
            icons: [ ReactIcon, NodeIcon ],
            code: "https://github.com/JIC-8130/jic-8130-yca",
            demo: "https://drive.google.com/file/d/1O0toj9WJowP8zXn_LlicOmgb4Tj2fUAa/view",
        },
        {
            title: "Purplepundit",
            imgSrc: "https://emanuallan.github.io/img/purple-pundit.jpg",
            info:
                "React web application that seperates the latest news articles according to their liberal & conservative bias using the NewsAPI and Media Bias Fact Checker.",
            icons: [ ReactIcon, NodeIcon ],
            code: "https://github.com/emanuallan/WTLT",
            demo: "https://purplepundit.appspot.com/",
        },
        {
            title: "Dispersive Service-Prov Dashboard",
            info:
                "A dashboard created for Dispersive's clientel's devices. Users can add, edit, delete, and search for certain devices within their system.",
            imgSrc: "https://emanuallan.github.io/img/dispersive.jpeg",
            icons: [ ReactIcon, ReduxIcon, NodeIcon ],
            code: "https://github.com/emanuallan/service-prov-dash",
            demo: "https://www.youtube.com/watch?v=De4pSY9tKsE&ab_channel=AllanSerna",
        },
        {
            title: "Stock Web Applet",
            info:
                "A small web applet that allows users to keep track of stocks and calculate profit gains and losses, as well as, equity percentages. I created this applet with the purpose of practicing with React's hook features (useState, useEffect). Data was fetched from the Finnhub API.",
            imgSrc: "https://emanuallan.github.io/img/stocko.png",
            icons: [ ReactIcon, ReduxIcon, NodeIcon ],
            code: "https://github.com/emanuallan/stocko",
            demo: "https://stocko.netlify.app/",
        },
        {
            title: "Joe's New Balance Shoe Tracker Script",
            info:
                "A python script that checks New Balance's outlet store website, Joe's, and checks for price changes (+/-) and new arrivals, as well as, removals amongst sneakers and clothing and exports them as a csv file. Done with Selenium and ChromeDriver.",
            imgSrc:
                "https://9to5toys.com/wp-content/uploads/sites/5/2018/06/joes-new-balance-4th-of-july.jpg?quality=82&strip=all",
            icons: [ JavascriptIcon ],
            code: "https://github.com/emanuallan/stocko",
            demo:
                "https://photos.google.com/share/AF1QipPw4ZSDQKFZ6Tu_Hb8_NcpCFwFVT7tP348chXWTI_JQta8u_EtkPr4Uw7RrKEudTQ?key=Y2pwQ042OGY3dXpncmZ3cW92Y1R2dWt0dW9Bb2Vn",
        },
        {
            title: "Investing Into Your Education Visual",
            info:
                "Data visualization that allows you to interact with data about income and higher education from various U.S. colleges of 2009.",
            imgSrc: "https://emanuallan.github.io/img/vis.png",
            icons: [ JavascriptIcon, HTMLIcon, CSSIcon ],
            code: "https://github.com/emanuallan/Colleges-P5",
            demo: "https://emanuallan.github.io/vis.html",
        },
        {
            title: "Weather Applet",
            info: "Mini weather app using the OpenWeather API and Bootstrap. Credit to Hamza Mirza for the tutorial.",
            imgSrc: "https://emanuallan.github.io/img/weather-app.jpg",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        }
    ];
    return (
        <div className="text-whippy flex flex-col items-center">
            <GitHubCalendar
                username="farvellhub"
                theme={{
                    background: "transparent",
                    text: "#eeeeee",
                    grade4: "hsl(203, 78%, 30%)",
                    grade3: "hsl(203, 78%, 44%)",
                    grade2: "hsl(203, 78%, 58%)",
                    grade1: "hsl(203, 78%, 72%)",
                    grade0: "#eee",
                }}
            >
                <ReactTooltip delayShow={50} html />
            </GitHubCalendar>
            <div className="flex self-start mt-10 uppercase tracking-widest">
                <FaTrophy className="text-xl mr-2 " />
                <p>Featured Projects</p>
            </div>
            <div className=" w-full grid  grid-cols-1 gap-10 mt-10">
                <FeaturedProjectCard
                    imgSrc="https://i.imgur.com/erjOZTD.png"
                    title={"Discord-Safe Bot"}
                    info={
                        "D-Safe is a discord bot created for online security, anti-spam and moderation purposes."
                    }
                    icons={[ NextJsIcon, ReactIcon, ReduxIcon, TailwindIcon ]}
                    color="#7289DA"
                    logoUrl="https://d33wubrfki0l68.cloudfront.net/747415793f4f58c0e000453dc0d08d250eaaa9d7/e68f2/assets/svg/logo.svg"
                />
                <FeaturedProjectCard
                    imgSrc="https://i.imgur.com/HrYttmM.png"
                    title={"DDD Viewer"}
                    info="3D viewer for OpenStreet maps."
                    icons={[ TypescriptIcon, VueJslIcon, VuetifylIcon, WebGlIcon ]}
                    color="#08415C"
                    logoUrl="https://i.imgur.com/iNBZyhh.png"
                />
            </div>
            <div className="flex self-start mt-10 uppercase tracking-widest">
                <IoIosTime className="text-xl mr-2 " />
                <p>Previous Projects</p>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                {projects?.map(( p ) => (
                    <HorizontalCard
                        key={p.info}
                        info={p.info}
                        imgSrc={p.imgSrc}
                        title={p.title}
                        icons={p.icons}
                        code={p.code}
                        demo={p.demo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
