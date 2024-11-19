import Category from "./WeedingHomeComponents/Catagori/Category";
import WeddingNextPlan from "./WeedingHomeComponents/WeedingNextPlan/WeedingNextPlan";
import UnforgettableEvents from "./WeedingHomeComponents/UnforgettableEvents/UnforgettableEvents";
import PersonalizedPlanning from "./WeedingHomeComponents/PersonalizedPlanning/PersonalizedPlanning";
import Section from "./WeedingHomeComponents/Section/Section";
import BridelyServices from "./WeedingHomeComponents/BridelyServices/BridelyServices";
import WeedingBanner from "./WeedingBanner/WeedingBanner";
import WeedingInsparation from "./Services/WeedingInsparation";
import Reservation from "./WeedingHomeComponents/Reservation/Reservation";
import EventList from "./WeedingHomeComponents/EventList/EventList";
import Testimonials from "./WeedingHomeComponents/Testimonials/Testimonials";
const WeedingMainHomePage = () => {
  return (
    <div>
      <WeedingBanner />
      <WeedingInsparation />
      <BridelyServices />
      <EventList />
      <Section />
      <PersonalizedPlanning />
      <UnforgettableEvents />
      <WeddingNextPlan />
      <Reservation />
      <Category />
      <Testimonials />
    </div>
  );
};

export default WeedingMainHomePage;
