import { NextPage } from "next";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";

import { FaTrophy } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

import {
    ProjectCard,
    HorizontalCard
} from "../components";

import * as Icons from "../components/Icons";


const Projects: NextPage = () => {
    

    const projects = [
        {
            title: "FarvellBot",
            info:
                "Personal discord bot for listen music, fun and moderation purposes. Youtube search, Imgur gifs and Reddit posts.",
            imgSrc: "https://discord.com/assets/ef555bf639a11bd65ae3065263788bba.png",
            icons: [ Icons.JavascriptIcon, Icons.NodeIcon, Icons.HerokuIcon ],
            code: "https://github.com/farvellhub/farvell-bot",
            demo: "https://discord.com/api/oauth2/authorize?client_id=822634934690250762&permissions=0&scope=bot",
        },
        {
            title: "JFlow-core",
            info:
                "Npm package for animation, rendering and styling elements on plain html.",
            imgSrc: "https://cdn.hashnode.com/res/hashnode/image/upload/v1604287956651/Jfvb2GjLZ.jpeg",
            icons: [ Icons.TypescriptIcon, Icons.NodeIcon, Icons.NpmIcon ],
            code: "https://github.com/farvellhub/jflow-core",
            demo: "https://www.npmjs.com/package/@farvell/jflow-core",
        },
        {
            title: "Sa Serradora",
            info:
                "Landing page for modern carpentry website. Parallax effect, full responsive design.",
            imgSrc: "https://i.imgur.com/ZKddg29.png",
            icons: [ Icons.HTMLIcon, Icons.JavascriptIcon, Icons.SassIcon, Icons.WebpackIcon ],
            code: "https://github.com/farvellhub/serradora",
            demo: "https://kikoterrasa.github.io",
        },
        {
            title: "NStudio",
            info:
                "Template conceptually made for a design studio. Lightbox showcase and responsivness.",
            imgSrc: "https://i.imgur.com/Hw6gzZ5.png",
            icons: [ Icons.HTMLIcon, Icons.JavascriptIcon, Icons.SassIcon, Icons.WebpackIcon ],
            code: "https://github.com/farvellhub/nstudio",
            demo: "https://farvellhub.github.io",
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
                <p> Projects</p>
            </div>
            <div className=" w-full grid  grid-cols-1 gap-10 mt-10">
                <ProjectCard
                    imgSrc="https://i.imgur.com/erjOZTD.png"
                    title={"Discord-Safe Bot"}
                    info={
                        "D-Safe is a discord bot created for online security, anti-spam and moderation purposes."
                    }
                    icons={[ Icons.NextJsIcon, Icons.ReactIcon, Icons.ReduxIcon, Icons.TailwindIcon, Icons.TypescriptIcon ]}
                    color="#7289DA"
                    logoUrl="https://d33wubrfki0l68.cloudfront.net/747415793f4f58c0e000453dc0d08d250eaaa9d7/e68f2/assets/svg/logo.svg"
                    site="https://discordsafe.com"
                />
                <ProjectCard
                    imgSrc="https://i.imgur.com/HrYttmM.png"
                    title={"DDD Viewer"}
                    info="3D viewer for OpenStreet maps."
                    icons={[ Icons.VueJslIcon, Icons.VuetifylIcon, Icons.TypescriptIcon, Icons.WebGlIcon ]}
                    color="#473D54"
                    logoUrl="https://i.imgur.com/mNAWRfY.png"
                    site="https://3dsmaps.com/maps/@42.2308346,-8.7278964,9.0z"
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