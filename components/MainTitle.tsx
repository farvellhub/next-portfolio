import MainTitleProps from "../types/MainTitleProps";

const MainTitle = ({
    normal,
    colored
}: MainTitleProps ): JSX.Element => {
    return (
        <h2 className="w-full text-whippy pb-2 uppercase text-6xl menuMin:text-9xl font-bold">
            {normal} <span className="text-typescript">{colored}</span>.
        </h2>
    );
};

export default MainTitle;