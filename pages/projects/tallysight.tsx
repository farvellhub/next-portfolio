import React from "react";
import FeatureCard from "../../components/FeatureCard";
import {
    FaReact,
    FaNodeJs,
    FaCss3Alt,
    FaStar,
    // FaHtml5,
    // FaPython,
    // FaTrophy,
} from "react-icons/fa";
import {
    SiNextDotJs,
    SiTypescript,
    SiMongodb,
    // SiFirebase,
    // SiUnity,
    // SiD3DotJs,
    // SiAdobephotoshop,
    // SiJavascript,
    // SiRedux,
    // SiTailwindcss,
} from "react-icons/si"; //got from https://react-icons.github.io/search
import FeaturedProjectCard from "../../components/FeaturedProjectCard";
import Testimonial from "../../components/Testimonial";

//border-b-2 border-yikyak
const Scholars = (): JSX.Element => {
    // const PythonIcon = <FaPython className="text-4xl text-python" />;
    // const FirebaseIcon = <SiFirebase className="text-3xl text-firebase" />;
    // const UnityIcon = <SiUnity className="text-3xl text-black" />;
    // const D3Icon = <SiD3DotJs className="text-3xl text-d3" />;
    // const PhotoshopIcon = <SiAdobephotoshop className="text-3xl text-react" />;
    // const TailwindIcon = <SiTailwindcss className="text-3xl text-tailwind" />;
    // const HTMLIcon = <FaHtml5 className="text-4xl text-html" />;
    // const ReduxIcon = <SiRedux className="text-3xl text-redux" />;
    // const JavascriptIcon = <SiJavascript className="text-3xl text-javascript" />;
    const CSSIcon = <FaCss3Alt className="text-4xl text-css" />;
    const ReactIcon = <FaReact className="text-4xl text-react" />;
    const NodeIcon = <FaNodeJs className="text-4xl text-node" />;
    const NextJsIcon = <SiNextDotJs className="text-3xl text-black" />;
    const MongoIcon = <SiMongodb className="text-3xl text-mongo" />;
    const TypescriptIcon = <SiTypescript className="text-3xl text-css" />;

    const features = [
        {
            title: "Custom Image Generator",
            tags: "Social Media Content Sharing",
            info:
                "Feature for Analysts on the platform that allows them to share picks for inidividual games or events (ex. NFL week 2). The generator creates a nice graphic for the Analyst based on their preferences which then allows them to download it and share it on social media platforms. This tool features the npm package html-to-image which also needed a proxy to work.",
            imgSrc: "/gifs/graphic-generator.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Game Analysis Filters",
            tags: "Data Filter, Search, and Sort",
            info:
                "Feature for site users that allows them to view game, spread, and over/under predictions from hundreds of analysts. Since games can feature so many analyst insights, I implemented functionalities that assist users to find what they need. Therefore, they can search for a particular analyst, see who picked a certain team, filter analysts to those of a particular organization, and more!",
            imgSrc: "/gifs/other-pros-modal.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Analyst Tools",
            tags: "Custom Components, Valid Input",
            info:
                "I had a part in implementing many of the fundamental tools for the Analysts on our platform; the Upcoming Events tab where an analyst can see all the games they're subscribed to (decided by the sports they follow) so they can submit their insight. This meant that I had to check for valid input from Analysts (valid links, valid scores, etc.) before they could submit. In addition, the Past Insights tab, where Analysts can see the records of their submitted insights and share them with a custom graphics generator.",
            imgSrc: "/gifs/analyst-tools.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Admin Portal",
            tags: "Multi-Upload, Efficiency",
            info:
                "Revamped the uploading in the site's admin portal, to reduce upload errors for the content team by implementing an excel-like table (using react handson table) that filters the proceeding column's dropdown options within each row. In other words, each cell has its own dropdown options which is dependent on the option selected in the cell right before it. This required data handling in our Express app which connected to our Mongo db.",

            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Rankings",
            tags: "Dynamic Sorting",
            info:
                "Feature for users that allows them to filter through sports or events and allows them to view rankings of those analysts whom gave predictions, to ultimately discover who performed the best. Rankings and percentiles change as you filter by organization so you can see the top performers within each organization.",
            imgSrc: "/gifs/ranking.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Analyst Profile",
            tags: "Next.js Routing, Params, Queries",
            info:
                "The Analyst Profile page is perhaps the most exciting features of the platform as users can gather insights from a specific analyst all on one page (many of the components spoken in the 'Analyst Tools' card are featured here). This page allows users to search and filter through the insights, which is reflected in the URL. By sharing this URL, other users who click on it will arrive to an insights page with all the filters applied by the user who shared the link.",
            imgSrc: "/gifs/analyst-profile.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
    ];

    return (

        <div className="text-whippy flex flex-col items-center">
            <div className=" w-full  mt-10 ">
                <div className="w-full">
                    <FeaturedProjectCard
                        imgSrc="https://tallysight.com/widget.png"
                        title={"TallySight"}
                        info="Tallysight is a next-generation platform that helps sports writers, analysts, & organizations showcase their insights and grow their brand."
                        icons={[ ReactIcon, NextJsIcon, TypescriptIcon, NodeIcon, CSSIcon, MongoIcon ]}
                        color="#29AAE1"
                        site="https://www.tallysight.com/"
                        logoUrl="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco/zbo6ohbkoda2dww7j7io"
                    />

                    <div className="flex flex-wrap md:flex-no-wrap  justify-center">
                        <Testimonial
                            name="Masheed Ahadi"
                            title="TallySight CTO"
                            email="masheed@tallysight.com"
                            statement="Allan is a talented and bright engineer that not only was a pleasure to work with everyday but has an amazing level of drive you rarely see in people.

                                        He was an incredible addition to our engineering team and was able to quickly execute and ship several high-impact features to help scale our product. Allan jumped right in to take on any task and was quickly able to grasp concepts and learn new technologies on the fly.
                                        
                                        He works extremely hard to become a better and better engineer, and it's been a pleasure to work with him and watch him grow over the past several months. I'm confident that he can tackle any problem thrown his way, and recommend him to any team without reservation. I would love for the opportunity to work with Allan to join my team again."
                            imgSrc="https://pbs.twimg.com/profile_images/1291167402315587584/Rw4deqFL_400x400.jpg"
                        />
                        {/* <Testimonial
                                        name="Francisco Jimenez"
                                        title="Scholars Head of Engineering"
                                        email="evan@quikfixjobs.com"
                                        statement="Allan was able to quickly jump into the Scholars platform and add high-level features. He has proved to be a reliable developer with a great understanding for React and Redux. His programming skills, matched with his enthusiasm, would make a great addition to any team!"
                                        imgSrc="https://ca.slack-edge.com/T3DUW6V2Q-U0177LCNVLH-d46bcf70b5b8-512"
                                    /> */}
                    </div>
                </div>
            </div>

            <div className="flex self-start mt-10 mb-6 uppercase tracking-widest">
                <FaStar className="text-xl mr-2 " />
                <p>Features</p>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-1">
                {features?.map(( f ) => (
                    <FeatureCard
                        key={f.info}
                        info={f.info}
                        tags={f.tags}
                        imgSrc={f.imgSrc}
                        title={f.title}
                        icons={f.icons}
                        code={f.code}
                        demo={f.demo}
                    />
                ))}
            </div>
            <div className="flex self-start mt-16 mb-6 uppercase tracking-widest">
                <FaStar className="text-xl mr-2 " />
                <p>Top Partners</p>
            </div>
            <div className=" bg-white w-full min-h-64 p-10 flex flex-wrap md:flex-no-wrap items-center text-charcoal">
                <div className="flex items-center justify-around md:w-1/2 w-full flex-wrap sm:flex-no-wrap">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/SportsIllustrated.svg/800px-SportsIllustrated.svg.png"
                        alt="Sports Illustrated"
                        className="h-16 w-auto my-4"
                    />
                    <img
                        src="https://media.pff.com/2018/06/PFFBall_Black-e1530132578167.png"
                        alt="Pro Football Focus"
                        className="h-10 sm:h-16 w-auto my-4"
                    />
                </div>
                <div className="items-center flex justify-around md:w-1/2 w-full flex-wrap sm:flex-no-wrap">
                    <img
                        src="https://www.sportradar.com/wp-content/uploads/sites/8/2014/06/fb_sp_logo.png"
                        alt="SportsRadar"
                        className="h-20 w-auto my-4"
                    />

                    <img
                        src="https://www.nlgja.org/2019/wp-content/uploads/sites/14/2019/07/ESPN-logo-2015-1.png"
                        alt="ESPN"
                        className="h-8 w-auto my-4"
                    />
                </div>
            </div>
        </div>
                    
    );
};

export default Scholars;
