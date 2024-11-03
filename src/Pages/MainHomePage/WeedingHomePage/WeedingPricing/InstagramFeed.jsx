import { InstagramIcon } from "lucide-react";

const InstagramFeed = () => {
    return (
        <div>
            <div>
                <div className="relative bg-cover bg-no-repeat min-h-[280px] pt-[30px]">
                    <div className="flex flex-col items-center mb-6">
                        <img
                            loading="lazy"
                            decoding="async"
                            width="70"
                            height="70"
                            src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/instagram_icon.png"
                            alt="Instagram Icon"
                            className="w-20 h-20 md:w-24 md:h-24" // Responsive image size
                        />
                        <h2 className="text-black text-[40px] md:text-[50px] font-semibold mt-2 text-center">
                            Instagram Feed
                        </h2>{" "}
                        {/* Responsive font size */}
                    </div>
                </div>
            </div>
            <div>
                <div
                    className="relative bg-cover bg-no-repeat min-h-screen"
                    style={{
                        backgroundImage:
                            "url('https://designingmedia.com/bridely/wp-content/uploads/2022/07/sec11_background.jpg')",
                    }}
                >
                    <div className="flex flex-col items-center p-6 bg-white bg-opacity-50 min-h-screen">
                        <div className="flex flex-wrap justify-center gap-4 mt-[-100px]">
                            {instagramData.map(({ id, imgSrc, link, alt }) => (
                                <div key={id} className="relative flex flex-col items-center group">
                                    <img
                                        loading="lazy"
                                        decoding="async"
                                        width="255"
                                        height="255"
                                        src={imgSrc}
                                        alt={alt}
                                        className="w-64 h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                                    />
                                    <a
                                        className="absolute inset-0 flex items-center justify-center bg-white text-black px-4 py-2 rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram mr-2"></i>
                                        <InstagramIcon
                                            style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                                        />
                                        <span className="text-sm md:text-base">Bridely</span>{" "}
                                        {/* Responsive text size */}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramFeed;

const instagramData = [
    {
        id: 1,
        imgSrc: "https://designingmedia.com/bridely/wp-content/uploads/2022/07/coupleHands.jpg",
        link: "https://www.instagram.com/bridely",
        alt: "Couple Hands",
    },

    {
        id: 3,
        imgSrc: "https://designingmedia.com/bridely/wp-content/uploads/2022/07/sec10_couples.jpg",
        link: "https://www.instagram.com/bridely",
        alt: "Couples",
    },
    {
        id: 4,
        imgSrc: "https://designingmedia.com/bridely/wp-content/uploads/2022/07/instagram_123.pn_.jpg",
        link: "https://www.instagram.com/bridely",
        alt: "Instagram Image 1",
    },
];
