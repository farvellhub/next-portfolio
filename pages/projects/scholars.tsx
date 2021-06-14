import React from "react";
import FeatureCard from "../../components/FeatureCard";
import {
    FaReact,
    FaNodeJs,
    FaStar,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaTrophy,
} from "react-icons/fa";
import {
    SiRedux,
    SiTailwindcss,
    SiFirebase,
    SiNextDotJs,
    SiJavascript,
    SiMongodb,
    SiUnity,
    SiD3DotJs,
    SiAdobephotoshop,
    SiTypescript,
} from "react-icons/si"; //got from https://react-icons.github.io/search
import FeaturedProjectCard from "../../components/FeaturedProjectCard";
import Testimonial from "../../components/Testimonial";

//border-b-2 border-yikyak
const Scholars = (): JSX.Element => {
    // const PythonIcon = <FaPython className="text-4xl text-python" />;
    // const CSSIcon = <FaCss3Alt className="text-4xl text-css" />;
    // const HTMLIcon = <FaHtml5 className="text-4xl text-html" />;
    // const TypescriptIcon = <SiTypescript className="text-3xl text-css" />;
    // const NextJsIcon = <SiNextDotJs className="text-3xl text-black" />;
    // const JavascriptIcon = <SiJavascript className="text-3xl text-javascript" />;
    // const MongoIcon = <SiMongodb className="text-3xl text-mongo" />;
    // const UnityIcon = <SiUnity className="text-3xl text-black" />;
    // const D3Icon = <SiD3DotJs className="text-3xl text-d3" />;
    const PhotoshopIcon = <SiAdobephotoshop className="text-3xl text-react" />;
    const ReactIcon = <FaReact className="text-4xl text-react" />;
    const NodeIcon = <FaNodeJs className="text-4xl text-node" />;
    const ReduxIcon = <SiRedux className="text-3xl text-redux" />;
    const FirebaseIcon = <SiFirebase className="text-3xl text-firebase" />;
    const TailwindIcon = <SiTailwindcss className="text-3xl text-tailwind" />;

    const features = [
        {
            title: "Company Search & Follow",
            tags: "Anon. Funcs, Search/Sort, Params",
            info:
                "Feature for students on the platform that allows them to search through all available companies on the platform to learn more about them, and they are given the option to follow them. By following them, the student can keep up with any webinars the company wants to hold and, in return, companies get to see who follows them, in addition to, who interacts with them the most!",
            imgSrc: "/gifs/company-search.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Blog Tool",
            tags: "CRUD, Content Generation",
            info:
                "Feature for site and business admins which allows them to create, update, and delete articles which can be read by students on the platform. This tool features the react-rte and react-html-parser npm packages.",
            imgSrc: "/gifs/blog.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Student Resources",
            tags: "Responsive Design, O*NET API",
            info:
                "Feature for students so that they can explore career resources and have access to the start-up owned podcast. Each resource has its own API to which requests are made and information is received from. Each request tends to be dependent on the page breadcrumbs, therefore it is dynamic and loads only what is requested by the user.",
            imgSrc: "/gifs/student-resources.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "ATS Integration",
            tags: "Greenhouse, Harvest API",
            info:
                "Feature for business partners that allows them to connect their Greenhouse Account to the platform. This allows them to be able to export candidates from Scholars to Greenhouse via their unique API key.",
            imgSrc: "/gifs/ats-integration.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Imports from CSV",
            tags: "CSV File I/O, Ag-Grid",
            info:
                "Feature for business partners that allows them to upload several candidates from CSV and store them onto the platform. This tool features ag-grid-react, an npm package that allows me to show a preview of the csv that is about to be uploaded and can be editted if the user notices a mistake within the information.",

            icons: [ ReactIcon ],
            imgSrc: "/gifs/import-csv.gif",
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Job Board",
            tags: "Notifications",
            info:
                "Feature for students which allows them to see public job board positions, to which they can apply and notify the business about their interest in the position.",
            imgSrc: "/gifs/job-board.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Recruitment Stats Dashboard",
            tags: "Data Polishing & Visualization",
            info:
                "Feature for business partners which allows them to see an assortment of information about their recruiting efforts (page views, number of applicants, messages, response rates, & more). The tool also features a popular npm package, chart-js, which is used to better see the demographics of applicants of certain positions.",
            imgSrc: "/gifs/stats.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Events Visitor Landing Page",
            tags: "Routing for Social Media Sharing",
            info:
                "Feature for business partners which allows them to share scheduled webinar events via a custom url. This url can then be shared on Social Media and lead potential candidates to a landing page. Those who are already users and logged in can just press the RSVP button to save the event to the Events tab of their profile. If they're a new user, the user is led to the register page where they can then sign up and join the Scholars platform so they can attend the event.",
            imgSrc: "/gifs/event-landing.gif",
            icons: [ ReactIcon ],
            code: "https://github.com/emanuallan/weather-app",
            demo: "https://www.youtube.com/watch?v=P0vsGO4svUM&feature=youtu.be&t=724&ab_channel=HamzaMirza",
        },
        {
            title: "Documentation",
            tags: "Code Maintenance",
            info:
                "Wrote documentation on the implementation of the ATS integration for developers at Greenhouse, so that they could approve our design patterns and security measures for integrating their platform onto ours.",

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
                        imgSrc="https://secureservercdn.net/198.71.233.109/phy.b29.myftpupload.com/wp-content/uploads/2020/06/Match-Made.png"
                        title={"Scholars"}
                        info={
                            "Scholars is a business recruiting platform that connects college students with employers for internships and entry-level positions."
                        }
                        icons={[ ReactIcon, ReduxIcon, NodeIcon, TailwindIcon, FirebaseIcon ]}
                        color="#08415C"
                        site="https://hirescholars.com/"
                        logoUrl="https://media-exp1.licdn.com/dms/image/C4E0BAQHPZloeKujdzw/company-logo_200_200/0?e=2159024400&v=beta&t=sPMZhft0EMlXU3cNUvnPpy0Kg46u5033VGQw7ex4nis"
                    />

                    <div className="flex flex-wrap md:flex-no-wrap  justify-center">
                        <Testimonial
                            name="Evan Deere"
                            title="Scholars CTO"
                            email="evan@quikfixjobs.com"
                            statement="Allan was able to quickly jump into the Scholars platform and add high-level features. He has proved to be a reliable developer with a great understanding for React and Redux. His programming skills, matched with his enthusiasm, would make a great addition to any team!"
                            imgSrc="https://pbs.twimg.com/profile_images/1087112295816355841/8r5Nr6CD.jpg"
                        />
                        {/* <Testimonial
                                        name="Jahziel Villasana"
                                        title="Scholars Co-Worker"
                                        email="jahz@gatech.edu"
                                        statement="Sed fringilla mauris sit amet nibh. Fusce vulputate eleifend sapien. Donec posuere vulputate arcu. Cras sagittis. In hac habitasse platea dictumst.

                                    Vivamus in erat ut urna cursus vestibulum. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. In consectetuer turpis ut velit."
                                        imgSrc="https://avatars1.githubusercontent.com/u/19838370?s=460&u=0f07ef9e87d1e3e89b8b4b9a1579e8243a3381ec&v=4"
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
                <p>Top Clients</p>
            </div>
            <div className=" bg-white w-full min-h-64 p-10 flex flex-wrap md:flex-no-wrap items-center text-charcoal">
                <div className="flex items-center justify-around md:w-1/2 w-full flex-wrap sm:flex-no-wrap">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/600px-Dell_logo_2016.svg.png"
                        alt="Dell"
                        className="h-16 w-auto my-4"
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5c302b48da02bc430501672f/1551904833065-J6GGXAS07R7QV0EOOS39/ke17ZwdGBToddI8pDm48kGmgZcqDSaVFbSoJfWU-wXBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyYeZOoY04dnUQwkz_gy8wsw481feGVoG3nPPwWtZF4Zp4Xm8wQBJ7UWkrP56GD6ZQ/robinhood-logo.png"
                        alt="Robinhood"
                        className="h-10 sm:h-16 w-auto my-4"
                    />
                </div>
                <div className="flex items-center justify-around md:w-1/2 w-full flex-wrap sm:flex-no-wrap">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Intuit_Logo.svg/1200px-Intuit_Logo.svg.png"
                        alt="Intuit"
                        className="h-10 w-auto my-4"
                    />

                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png"
                        alt="Shopify"
                        className="h-12 w-auto my-4"
                    />
                </div>
            </div>
        </div>

    );
};

export default Scholars;
