
import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";
import WhoWeAre from "../../../../Components/AboutPageComponents/WhoWeAre/WhoWeAre";
import Section from "../WeedingHomeComponents/Section/Section";
import InstagramFeed from "../WeedingPricing/InstagramFeed";
import WeedingInsparation from "../Services/WeedingInsparation";
import WeedingSlider from "../../../../Components/Shared/WeedingSlider/WeedingSlider";

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
      <Section />
      <WeedingSlider />
      <WeedingInsparation />
      <InstagramFeed />
    </>
  );
};

export default WeedingAbout;
