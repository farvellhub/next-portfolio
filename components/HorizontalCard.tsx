import React from "react";

import { DiGithubAlt } from "react-icons/di";
import { FaPlay } from "react-icons/fa";

import HorizontalCardProps from "../types/HorizontalCardProps";


const HorizontalCard: React.FC<HorizontalCardProps> = ({
    title, 
    info,
    imgSrc,
    icons,
    code,
    demo
}: HorizontalCardProps ): JSX.Element => {
    return (
        <>
            <div className="max-w-sm w-full lg:max-w-full lg:flex mt-10">
                <div
                    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                    }}
                    title="Woman holding a mug"
                ></div>
                <div className="border-r shadow-xl border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <div className="text-gray-900 font-bold text-xl mb-2 uppercase tracking-wider">{title}</div>
                        <p className="text-gray-700 text-base">{info}</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            {icons?.map(( icon ) => (
                                <span className="mr-2" key={0}>{icon}</span>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <a href={code} target="_blank" rel="noreferrer">
                                <DiGithubAlt className="text-3xl text-whippy hover:text-css mr-2" />
                            </a>
                            <a href={demo} target="_blank" rel="noreferrer">
                                <FaPlay className="text-lg text-whippy hover:text-css" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HorizontalCard;
