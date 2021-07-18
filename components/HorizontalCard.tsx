import React from "react";
import tw from "twin.macro";

import { DiGithubAlt } from "react-icons/di";
import { FaPlay } from "react-icons/fa";

import HorizontalCardProps from "../types/HorizontalCardProps";


const JBetween = tw.div`flex justify-between`;
const ICenter = tw.div`flex items-center`;

const CardWrapper = tw.div`max-w-sm w-full lg:max-w-full lg:flex mt-10`;
const PhotoCard = tw.div`h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`;
const ContentCard = tw.div`border-r shadow-xl border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`;
const TitleCard = tw.div`text-gray-900 font-bold text-xl mb-2 uppercase tracking-wider`;
const InfoCard = tw.p`text-gray-700 text-base`;


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
            <CardWrapper>
                <PhotoCard
                    style={{
                        backgroundImage: `url(${imgSrc})`,
                    }}
                    title="Woman holding a mug"
                ></PhotoCard>
                <ContentCard>
                    <div className="mb-8">
                        <TitleCard>{title}</TitleCard>
                        <InfoCard>{info}</InfoCard>
                    </div>
                    <JBetween>
                        <ICenter>
                            {icons?.map(( icon ) => (
                                <span className="mr-2" key={0}>{icon}</span>
                            ))}
                        </ICenter>
                        <ICenter>
                            <a href={code} target="_blank" rel="noreferrer">
                                <DiGithubAlt className="text-3xl text-whippy hover:text-css mr-2" />
                            </a>
                            <a href={demo} target="_blank" rel="noreferrer">
                                <FaPlay className="text-lg text-whippy hover:text-css" />
                            </a>
                        </ICenter>
                    </JBetween>
                </ContentCard>
            </CardWrapper>
        </>
    );
};

export default HorizontalCard;
