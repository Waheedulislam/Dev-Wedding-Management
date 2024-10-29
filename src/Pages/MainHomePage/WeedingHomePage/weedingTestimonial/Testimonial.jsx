/* eslint-disable no-undef */

import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";
import PersonalizedPlanning from "../WeedingHomeComponents/PersonalizedPlanning/PersonalizedPlanning";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Testimonial = () => {
    const description = 'A wedding is a celebration or ceremony of marriage. Besides being a formal way to mark the union of two people, weddings can be a lot of fun too.';
    return (
        <div>
            {/* banner-Section  */}
            <BannerSection bannerSectionTitle="Testimonial"
                bannerSectionDescription={description}
            />

            {/* planning-Section  */}
            <PersonalizedPlanning />


            {/* slider  */}
            <div className="bg-[#f0f7f7] min-h-screen py-[100px]">
                <img
                    src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/body_bird-e1658928223548-1.png"
                    alt=""
                    className="ml-12"
                />
                <div className="max-w-4xl mx-auto py-10">
                    <h2 className="text-[22px] font-bold text-center text-[#f4a492] mb-6">
                        Hear From Our Newlyweds
                    </h2>
                    <h2 className="text-[50px] font-bold text-center mb-10">
                        Love Stories Shared by Our Clients
                    </h2>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set the delay and interaction settings
                        loop={true}
                        className="mySwiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-[30px] rounded-br-none shadow-md">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-full mb-4"
                                        width="100"
                                        height="100"
                                    />
                                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="grid grid-cols-5 px-[6px] sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-5 mt-[50px]">
                        <div>
                            <img
                                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-1.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-2.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-3.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-4.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-5.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
const testimonials = [
    {
        text: "Quisquam est, qui dolorem ipsum quia dolor sit amet consequi doli aetur, adipisci velit, sed ruia non numquam eius modi temormagna incidunt ut labore et dolore magnam alieuam zuaerat volutavelit, se tem nostrum exercitationem.",
        name: "Cordia Wehner",
        position: "Event Planning",
        image:
            "https://designingmedia.com/bridely/wp-content/plugins/bridely-toolkit//assets/images/testimonial-default-img.jpg", // Replace with actual image URLs
    },
    {
        text: "Another testimonial text that goes here. This is a great service!",
        name: "John Doe",
        position: "Wedding Coordinator",
        image:
            "https://designingmedia.com/bridely/wp-content/plugins/bridely-toolkit//assets/images/testimonial-default-img.jpg",
    },
    {
        text: "Excellent experience! Highly recommend for anyone planning an event.",
        name: "Jane Smith",
        position: "Event Manager",
        image:
            "https://designingmedia.com/bridely/wp-content/plugins/bridely-toolkit//assets/images/testimonial-default-img.jpg",
    },
];