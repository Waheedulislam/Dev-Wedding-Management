import BannerSection from "../../../../Components/Shared/BannerSection/BannerSection";
import Reservation from "../WeedingHomeComponents/Reservation/Reservation";
import WeddingNextPlan from "../WeedingHomeComponents/WeedingNextPlan/WeedingNextPlan";

const WeedingReservation = () => {
    const description = 'A wedding can be a simple civil ceremony at City Hall or an elaborate event that takes place over several days and involves religious rituals, food and drink, and hundreds of guests.';
    return (
        <div>
            {/* banner-Section  */}
            <BannerSection bannerSectionTitle="Reservation"
                bannerSectionDescription={description}
            />
            <WeddingNextPlan />
            <Reservation />
        </div>
    );
};

export default WeedingReservation;