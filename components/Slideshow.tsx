import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://i.imgur.com/5ZjKB43.png",
        thumbnail: "https://i.imgur.com/5ZjKB43.png",
    },
    {
        original: "https://i.imgur.com/ZT6R2ah.png",
        thumbnail: "https://i.imgur.com/ZT6R2ah.png",
    },
    {
        original: "https://i.imgur.com/6XhsqJ7.png",
        thumbnail: "https://i.imgur.com/6XhsqJ7.png",
    },
];
const Slideshow = (): JSX.Element => {
    return (
        <>
            <ImageGallery items={images} autoPlay={true} />;
        </>
    );
};

export default Slideshow;