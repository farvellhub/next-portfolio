import { NextPage } from "next";

import { MainTitle } from "../components/";

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="fade-out w-full flex justify-items-center items-center flex-wrap">
        <div className="w-full menuMin:w-2/3">
          <MainTitle normal="about" colored="me" />
          <p className="text-xl text-whippy menuMin:pr-4">
            My name is Adri&aacute;n Terrassa, and I&apos;m an apassionate for
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
            href="https://drive.google.com/file/d/1U2n-8p2gZVH8n3JJQLwMcDKA41XWspOZ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
        <img
          src="https://i.imgur.com/fZsHBKR_d.webp?maxwidth=640&shape=thumb&fidelity=medium"
          className="w-full pt-12 menuMin:w-1/3 menuMin:pt-0"
        />
      </div>
    </>
  );
};

export default AboutPage;
