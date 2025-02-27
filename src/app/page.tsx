"use client";
import useLoaded from "../hooks/useLoaded";

import {
  Menu,
  Footer,
  Welcome,
  MainTitle,
  ProjectCard,
  HorizontalCard,
  SkillCard
} from "../components/";

import {
  JavascriptIcon,
  TypescriptIcon,
  HerokuIcon,
  NodeIcon,
  NpmIcon,
  HTMLIcon,
  SassIcon,
  WebpackIcon,
  NextJsIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  VueJslIcon,
  VuetifylIcon,
  CSSIcon,
  BabelIcon,
  PostcssIcon,
  JestIcon,
  MongoIcon
} from "../shared/Icons";

import { FaTrophy } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

export default function Home() {
  const loaded = useLoaded();

  const projects = [
    {
      title: "FarvellBot",
      info:
        "Personal discord bot for listen music, fun and moderation purposes. Youtube search, Imgur gifs and Reddit posts.",
      imgSrc: "https://discord.com/assets/ef555bf639a11bd65ae3065263788bba.png",
      icons: [JavascriptIcon, NodeIcon, HerokuIcon],
      code: "https://github.com/farvellhub/farvell-bot",
      demo: "https://discord.com/api/oauth2/authorize?client_id=822634934690250762&permissions=0&scope=bot",
    },
    {
      title: "JFlow-core",
      info:
        "Npm package for animation, rendering and styling elements on plain html.",
      imgSrc: "https://cdn.hashnode.com/res/hashnode/image/upload/v1604287956651/Jfvb2GjLZ.jpeg",
      icons: [TypescriptIcon, NodeIcon, NpmIcon],
      code: "https://github.com/farvellhub/jflow-core",
      demo: "https://www.npmjs.com/package/@farvell/jflow-core",
    },
    {
      title: "Sa Serradora",
      info:
        "Landing page for modern carpentry website. Parallax effect, full responsive design.",
      imgSrc: "https://i.imgur.com/ZKddg29.png",
      icons: [HTMLIcon, JavascriptIcon, SassIcon, WebpackIcon],
      code: "https://github.com/farvellhub/serradora",
      demo: "https://kikoterrasa.github.io",
    },
    {
      title: "NStudio",
      info:
        "Template conceptually made for a design studio. Lightbox showcase and responsivness.",
      imgSrc: "https://i.imgur.com/Hw6gzZ5.png",
      icons: [HTMLIcon, JavascriptIcon, SassIcon, WebpackIcon],
      code: "https://github.com/farvellhub/nstudio",
      demo: "https://farvellhub.github.io",
    }
  ];

  const sectionSkills = [
    {
      title: "Languages",
      skills: ["HTML5", "CSS3", "SASS", "JavaScript", "TypeScript"],
      icons: [HTMLIcon, CSSIcon, SassIcon, JavascriptIcon, TypescriptIcon]
    },
    {
      title: "Frontend technologies",
      skills: ["React", "Next.js", "TailwindCSS"],
      icons: [ReactIcon, ReduxIcon, NextJsIcon, TailwindIcon, MongoIcon]
    },
    {
      title: "Tooling",
      skills: ["Webpack", "Babel", "PostCSS", "Jest"],
      icons: [WebpackIcon, BabelIcon, PostcssIcon, JestIcon]
    },
    {
      title: "Backend technologies",
      skills: [],
      icons: []
    }
  ];

  return (
    loaded ? (
      <>
        <div id="home" className="flex justify-center bg-background">
          <div className={"bg-background  h-full min-h-screen max-w-7xl w-full"}>
            <div className="mx-4 sm:mx-10 h-full min-h-screen flex flex-col justify-between">
              <Menu />

              <div className="fade-out w-full flex justify-items-center flex-wrap">
                <h1 className="text-6xl font-title w-full pb-2 uppercase font-bold bg-clip-text bg-gradient-to-br from-typescript to-pink-400 text-transparent menuMin:text-9xl">
                  Hi visitor!
                </h1>
                <p className="text-xl w-full pb-2 text-whippy menuMin:text-2xl">
                  I&apos;m <span className="text-yellow-600">javascript</span> and <span className="text-typescript">typescript</span> developer focused on website design and frontend development.
                </p>

                <p className="text-xl w-full pb-16 menuMin:text-2xl">Below you can see some of my projects.</p>
              </div>
              <div id="projects" className="fade-out text-whippy flex flex-col items-center">
                <MainTitle normal="My" colored="Projects" />
                <div className="flex self-start items-center mt-6 uppercase tracking-widest">
                  <FaTrophy className="text-xl mr-2" />
                  <p className="text-md menuMin:text-xl">Open Source Projects</p>
                </div>
                <div className=" w-full grid grid-cols-1 gap-10 mt-10">
                  <ProjectCard
                    imgSrc="https://i.imgur.com/erjOZTD.png"
                    title={"Discord-Safe Bot"}
                    info={
                      "D-Safe is a discord bot created for online security, anti-spam and moderation purposes."
                    }
                    icons={[NextJsIcon, ReactIcon, ReduxIcon, TailwindIcon, TypescriptIcon]}
                    color="#7289DA"
                    logoUrl="https://d33wubrfki0l68.cloudfront.net/747415793f4f58c0e000453dc0d08d250eaaa9d7/e68f2/assets/svg/logo.svg"
                    site="https://discordsafe.com"
                  />
                  <ProjectCard
                    imgSrc="https://i.imgur.com/HrYttmM.png"
                    title={"DDD Viewer"}
                    info="3D viewer for OpenStreet maps."
                    icons={[VueJslIcon, VuetifylIcon, TypescriptIcon]}
                    color="#473D54"
                    logoUrl="https://i.imgur.com/mNAWRfY.png"
                    site="https://3dsmaps.com/maps/@42.2308346,-8.7278964,9.0z"
                  />
                </div>
                <div className="flex self-start items-center mt-10 uppercase tracking-widest">
                  <IoIosTime className="text-xl mr-2" />
                  <p className="text-md menuMin:text-xl">Previous Personal Projects</p>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
                  {projects?.map((p) => (
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
              <div id="skills" className="fade-out w-full flex justify-items-center items-center flex-wrap">
                <MainTitle normal="My" colored="Skills" />
                <div className="w-full flex justify-items-center items-start flex-wrap">
                  {sectionSkills.map((section) => (
                    <SkillCard
                      title={section.title}
                      skills={section.skills}
                      icons={section.icons}
                      key={0}
                    />
                  ))}
                </div>
              </div>
              <div id="about" className="fade-out w-full flex justify-items-center items-center flex-wrap">
                <div className="w-full menuMin:w-2/3">
                  <MainTitle normal="about" colored="me" />
                  <p className="text-xl text-whippy menuMin:pr-4">
                    My name is Adri&aacute;n Terrassa, and I&apos;m a passionate for
                    frontend development. I started to learn since 2015 self-taught, and
                    since then I keep learning and renewing myself.
                  </p>
                  <br />
                  <p className="text-xl pb-12 text-whippy menuMin:pr-4">
                    Actually I&apos;m an active collaborator to
                    <a
                      className="pl-2 underline hover:text-typescript"
                      href="https://3dsmaps.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      3dsmaps.com
                    </a>{" "}
                    and
                    <a
                      className="pl-2 underline hover:text-typescript"
                      href="https://discordsafe.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Discord Safe Bot
                    </a>
                    .
                  </p>
                  <a
                    className="rounded-sm text-2xl tracking-wider bg-typescript py-3 px-8 mt-6 text-white hover:bg-css"
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </>
    ) : (<Welcome />)
  );
}
