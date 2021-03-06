import { NextPage } from "next";

import {
    SkillCard,
    MainTitle
} from "../components";

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
    JestIcon,
    ReactIcon,
    ReduxIcon,
    NextJsIcon,
    TailwindIcon,
    MaterialIcon,
    FigmaIcon,
    MongoIcon
} from "../shared/Icons";


const SkillsPage: NextPage = () => {
    const sectionSkills = [
        {
            title: "Languages",
            skills: [ "HTML5", "CSS3", "SASS", "JavaScript", "TypeScript" ],
            icons: [ HTMLIcon, CSSIcon, SassIcon, JavascriptIcon, TypescriptIcon ]
        },
        {
            title: "Technologies",
            skills: [ "React", "Redux", "Next.js", "Material-UI", "TailwindCSS", "Mongo" ],
            icons: [ ReactIcon, ReduxIcon, NextJsIcon, MaterialIcon, TailwindIcon, MongoIcon ]
        },
        {
            title: "Tooling",
            skills: [ "Webpack", "Babel", "PostCSS", "Jest" ],
            icons: [ WebpackIcon, BabelIcon, PostcssIcon, JestIcon ]
        },
        {
            title: "Design",
            skills: [ "Photoshop", "Figma" ],
            icons: [ PhotoshopIcon, FigmaIcon ]
        }
    ];

    return (
        <>
            <div className="fade-out w-full flex justify-items-center items-center flex-wrap">
                <MainTitle normal="My" colored="Skills" />
                <div className="w-full flex justify-items-center items-start flex-wrap">
                    {sectionSkills.map(( section ) => (
                        <SkillCard
                            title={section.title}
                            skills={section.skills}
                            icons={section.icons}
                            key={0}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SkillsPage;