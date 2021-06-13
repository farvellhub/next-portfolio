import React from "react";

interface SkillCardProps {
    imgSrc: string;
    name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ imgSrc, name }: SkillCardProps ): JSX.Element => {
    return (
        <div
            style={{ minWidth: "20em" }}
            className="flex flex-col items-center justify-center px-4 py-4 m-4 mt-4 bg-whippy border border-gray-300 rounded sm:mt-0"
        >
            <img src={imgSrc} className="w-24 h-24 mb-6" />
            <p className="text-lg text-center text-charcoal font-semibold">{name}</p>
        </div>
    );
};

export default SkillCard;
