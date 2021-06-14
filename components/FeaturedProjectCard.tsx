import React from "react";
//import Link from "next/link";

interface FeaturedProjectCardProps {
    title: string;
    info: string;
    imgSrc: string;
    icons: JSX.Element[];
    color: string;
    logoUrl: string;
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
    title,
    info,
    imgSrc,
    icons,
    color,
    logoUrl
}: FeaturedProjectCardProps ): JSX.Element => {
    return (
        <div className="w-full">
            <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div className="md:flex-shrink-0">
                    <img src={imgSrc} alt="mountains" className="w-full object-cover h-64 rounded-lg rounded-b-none" />
                </div>
                <div className="px-4 py-2 mt-2 uppercase mr-1">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-sm text-gray-600 flex items-center">
                                <svg
                                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17pv-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </svg>
                                Collaborative Work
                            </p>
                            <h2 className="font-bold text-2xl  tracking-wider" style={{ color: color }}>
                                {title}
                            </h2>
                        </div>
                        <div className="flex items-center">
                            <img className="h-10 w-10" src={logoUrl} alt={title} />
                        </div>
                    </div>

                    <p className=" text-gray-700 mt-2 normal-case">{info}</p>

                    <div className=" flex justify-between items-center flex-wrap mb-3 mt-6">
                        <div className="flex items-center">
                            {icons?.map(( icon, i ) => (
                                <span className="mr-2" key={i}>
                                    {icon}
                                </span>
                            ))}
                        </div>

                        {/* <h2 className="text-sm tracking-tighter text-gray-900">
                                <a href="#">By Mohammed Ibrahim</a> <span className="text-gray-600">21 SEP 2015.</span>
                            </h2> */}
                        <div>
                            <a className="text-blue-500 text-sm" href="">
                                Visit Website
                            </a>
                        </div>
                    </div>

                    {/* <a href="#" className="flex text-gray-700">
                        <svg fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500" stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                        </svg>
                        5
                    </a> */}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjectCard;
