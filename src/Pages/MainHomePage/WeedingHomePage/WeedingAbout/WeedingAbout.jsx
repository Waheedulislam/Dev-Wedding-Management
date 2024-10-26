import React from "react";
import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";

const WeedingAbout = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit \nsed do eiusmod tempor incididunt";
  return (
    <>
      <BannerSection
        bannerSectionTitle="About Us"
        bannerSectionDescription={description}
      />
    </>
  );
};

export default WeedingAbout;
