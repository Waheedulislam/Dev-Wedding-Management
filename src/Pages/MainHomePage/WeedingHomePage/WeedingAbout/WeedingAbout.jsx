
import WhoWeAre from "../../../../Components/AboutPageComponents/WhoWeAre/WhoWeAre";
import Section from "../WeedingHomeComponents/Section/Section";
import WeedingInsparation from "../Services/WeedingInsparation";
import WeedingSlider from "../../../../Components/Shared/WeedingSlider/WeedingSlider";
import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";
import InstagramFeed from "../WeedingPricing/InstagramFeed";

const WeedingAbout = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit send do eiusmod tempor incididunt";
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
