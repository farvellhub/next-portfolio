import React from "react";
import tw from "twin.macro";

import ProjectCardProps from "../types/ProjectCardProps";


const WFull = tw.div`w-full`;
const JBetween = tw.div`flex justify-between`;
const ICenter = tw.div`flex items-center`;

const WrapperCard = tw.div`bg-white shadow-2xl rounded-xs mb-6 tracking-wide`;
const HeadingCard = tw.p`text-sm text-gray-600 flex items-center`;
const BannerCard = tw.div`md:flex-shrink-0`;
const PhotoCard = tw.img`w-full object-cover h-64 rounded-xs rounded-b-none`;
const ContentCard = tw.div`px-4 py-2 mt-2 uppercase mr-1`;
const LogoIconCard = tw.img`h-10 w-10`;
const TitleCard = tw.h2`font-bold text-2xl tracking-wider`;
const FooterCard = tw.div`flex justify-between items-center flex-wrap mb-3 mt-6`;
const IconCard = tw.svg`fill-current text-gray-500 w-3 h-3 mr-2`;
const LinkCard = tw.a`text-blue-500 text-sm hover:text-css`;
const InfoCard = tw.p`text-gray-700 mt-2 normal-case`;


const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    info,
    imgSrc,
    icons,
    color,
    logoUrl,
    site
}: ProjectCardProps ): JSX.Element => {
    return (
        <WFull>
            <WrapperCard>
                <BannerCard>
                    <PhotoCard src={imgSrc} alt="mountains" />
                </BannerCard>
                <ContentCard>
                    <JBetween>
                        <div>
                            <HeadingCard>
                                <IconCard
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17pv-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                </IconCard>
                                Collaborative Work
                            </HeadingCard>

                            <TitleCard style={{ color: color }}>
                                {title}
                            </TitleCard>
                        </div>

                        <ICenter>
                            <LogoIconCard src={logoUrl} alt={title} />
                        </ICenter>
                    </JBetween>

                    <InfoCard>{info}</InfoCard>

                    <FooterCard>
                        <ICenter>
                            {icons?.map(( icon, i ) => (
                                <span className="mr-2" key={i}>
                                    {icon}
                                </span>
                            ))}
                        </ICenter>
                        <div>
                            <LinkCard href={site}>
                                Visit Website
                            </LinkCard>
                        </div>
                    </FooterCard>
                </ContentCard>
            </WrapperCard>
        </WFull>
    );
};

export default ProjectCard;
