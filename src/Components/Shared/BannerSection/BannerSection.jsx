import React from "react";
import "./BannerSection.css";

const BannerSection = ({ bannerSectionTitle, bannerSectionDescription }) => {
  return (
    <div className="banner-img">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center h-[520px]">
          <h1 className="text-7xl text-black mb-6 font-bold">
            {bannerSectionTitle}
          </h1>
          <p className="text-2xl text-[#555555] text-center font-light whitespace-pre-line">
            {bannerSectionDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
