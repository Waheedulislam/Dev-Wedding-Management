import Category from "./WeedingHomeComponents/Catagori/Category";
import WeddingNextPlan from "./WeedingHomeComponents/WeedingNextPlan/WeedingNextPlan";
import UnforgettableEvents from "./WeedingHomeComponents/UnforgettableEvents/UnforgettableEvents";
import PersonalizedPlanning from "./WeedingHomeComponents/PersonalizedPlanning/PersonalizedPlanning";
import Section from "./WeedingHomeComponents/Section/Section";
import BridelyServices from "./WeedingHomeComponents/BridelyServices/BridelyServices";
import WeedingBanner from "./WeedingBanner/WeedingBanner";
import WeedingInsparation from "./Services/WeedingInsparation";
import Reservation from "./WeedingHomeComponents/Reservation/Reservation";
const WeedingMainHomePage = () => {
  return (
    <div >
      <WeedingBanner />
      <WeedingInsparation />
      <BridelyServices />
      <Section />
      <PersonalizedPlanning />
      <UnforgettableEvents />
      <WeddingNextPlan />
      <Reservation />
      <Category />
    </div>
  );
};

export default WeedingMainHomePage;
