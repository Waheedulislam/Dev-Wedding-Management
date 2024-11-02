import React from "react";
import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";
import WhoWeAre from "../../../../Components/AboutPageComponents/WhoWeAre/WhoWeAre";
import AboutBridely from "../../../../Components/AboutPageComponents/AboutBridely/AboutBridely";

const WeedingAbout = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit \nsed do eiusmod tempor incididunt";
  return (
    <>
      <BannerSection
        bannerSectionTitle="About Us"
        bannerSectionDescription={description}
      />
      <WhoWeAre />
      <AboutBridely />
    </>
  );
};

export default WeedingAbout;
