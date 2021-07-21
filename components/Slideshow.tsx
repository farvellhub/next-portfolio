import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "https://i.imgur.com/kMR4mkd.png",
        thumbnail: "https://i.imgur.com/kMR4mkd.png",
    },
    {
        original: "https://i.imgur.com/Hw6gzZ5.png",
        thumbnail: "https://i.imgur.com/Hw6gzZ5.png",
    },
    {
        original: "https://i.imgur.com/ZKddg29.png",
        thumbnail: "https://i.imgur.com/ZKddg29.png",
    },
];
const Slideshow = (): JSX.Element => {
    return (
        <>
            <ImageGallery items={images} autoPlay={true} />
        </>
    );
};

export default Slideshow;
