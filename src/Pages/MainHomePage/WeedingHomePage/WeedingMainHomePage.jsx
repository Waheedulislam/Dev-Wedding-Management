import Category from "./WeedingHomeComponents/Catagori/Category";
import WeedingReservation from "./WeedingHomeComponents/WeedingReservation/WeedingReservation";
import WeddingNextPlan from "./WeedingHomeComponents/WeedingNextPlan/WeedingNextPlan";
import UnforgettableEvents from "./WeedingHomeComponents/UnforgettableEvents/UnforgettableEvents";
import PersonalizedPlanning from "./WeedingHomeComponents/PersonalizedPlanning/PersonalizedPlanning";
import Section from "./WeedingHomeComponents/Section/Section";
const WeedingMainHomePage = () => {
  return (
    <div >
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
