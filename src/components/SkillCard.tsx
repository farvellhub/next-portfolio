import SkillCardProps from "../types/SkillCardProps";

const SkillCard: React.FC<SkillCardProps> = ({
    title, 
    skills,
    icons
}: SkillCardProps ) => {
    return (
        <>
            <div className="flex flex-wrap justify-center w-full menuMin:justify-start menuMin:w-1/4 sm:w-1/2">
                <h3 className="w-full text-center text-3xl pb-2 font-bold menuMin:text-left menuMin:text-4xl">{title}</h3>
                <ul className="text-xl pb-6 menuMin:text-2xl">
                    {skills?.map(( skill, index ) => (
                        <li className="flex items-center pb-2" key={0}>{icons[index]}<span className="pl-2">{skill}</span></li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SkillCard;
