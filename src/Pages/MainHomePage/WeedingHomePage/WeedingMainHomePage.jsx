import Category from "./WeedingHomeComponents/Catagori/Category";
import WeedingReservation from "./WeedingHomeComponents/WeedingReservation/WeedingReservation";
import WeddingNextPlan from "./WeedingHomeComponents/WeedingNextPlan/WeedingNextPlan";
import UnforgettableEvents from "./WeedingHomeComponents/UnforgettableEvents/UnforgettableEvents";
import PersonalizedPlanning from "./WeedingHomeComponents/PersonalizedPlanning/PersonalizedPlanning";
import Section from "./WeedingHomeComponents/Section/Section";
import BridelyServices from "./WeedingHomeComponents/BridelyServices/BridelyServices";
import WeedingBanner from "./WeedingBanner/WeedingBanner";
import WeedingInsparation from "./Services/WeedingInsparation";
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
      <WeedingReservation />
      <Category />
    </div>
  );
};

export default WeedingMainHomePage;
