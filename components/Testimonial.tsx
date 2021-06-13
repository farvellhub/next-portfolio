import React from "react";
import { MdEmail } from "react-icons/md";

interface TestimonialProps {
    name: string;
    title: string;
    email: string;
    statement: string;
    imgSrc: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, title, email, statement, imgSrc }: TestimonialProps ): JSX.Element => {
    return (
        <div className="flex bg-white shadow-lg rounded-lg w-full md:w-1/2 mx-0 my-4 md:mx-4 md:my-0">
            <div className="flex items-start px-4 py-6 w-full">
                <img className="w-20 h-20 rounded-full object-cover mr-4 shadow border-2" src={imgSrc} alt={name} />
                <div className="w-full">
                    <div className="flex items-center justify-between mr-2">
                        <h2 className="text-lg font-semibold text-charcoal -mt-1">{name}</h2>

                        {email && (
                            <a href={`mailto:${email}`}>
                                <MdEmail className="text-xl text-charcoal" />
                            </a>
                        )}
                    </div>
                    <p className="text-gray-700">{title} </p>
                    <p className="mt-3 text-gray-700 text-sm">{statement}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
