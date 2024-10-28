const UnforgettableEvents = () => {
    return (
        <div className="bg-[#9ACCC9] bg-opacity-15 py-12 md:py-20 lg:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 lg:mb-16">
                    <p className="text-lg md:text-xl mb-2 text-[#F4A492]">Unforgettable Events</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
                        Capturing Love and Celebration
                        <br className="hidden md:block" />
                        in Visual Showcase
                    </h1>
                </div>
                <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Images with rounded corners, shadow, and hover effect */}
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-gallery-img-1.jpg"
                        alt="Gallery Image 1"
                        className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                    />
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-gallery-img-2.jpg"
                        alt="Gallery Image 2"
                        className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                    />
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-gallery-img-3.jpg"
                        alt="Gallery Image 3"
                        className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                    />
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-gallery-img-4.jpg"
                        alt="Gallery Image 4"
                        className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                    />
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-gallery-img-5.jpg"
                        alt="Gallery Image 5"
                        className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                    />
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-gallery-img-6.jpg"
                        alt="Gallery Image 6"
                        className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default UnforgettableEvents;
