/* eslint-disable no-undef */

import PersonalizedPlanning from "../WeedingHomeComponents/PersonalizedPlanning/PersonalizedPlanning";

import WeedingSlider from "../../../../Components/Shared/WeedingSlider/WeedingSlider";
import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";

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
            <WeedingSlider />
        </div>
    );
};

export default Testimonial;
