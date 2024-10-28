
import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";
import WhoWeAre from "../../../../Components/AboutPageComponents/WhoWeAre/WhoWeAre";

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
    </>
  );
};

export default WeedingAbout;
