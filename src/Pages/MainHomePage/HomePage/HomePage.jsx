import BannerSection from "./BannerSection/BannerSection";
import EventItems from "./EventItems/EventsItem";
import Gallery from "./Gallery/Gallery";
import PricingPlan from "./PricingPlan/PricingPlan";
import RecentlyEvent from "./RecentEvent/RecentEvent";
import UpCommingEvents from "./UpCommingEvents/UpCommingEvents";

const HomePage = () => {
    return (

        <div >
            <BannerSection />
            <EventItems />
            <Gallery />
            <PricingPlan />
            <RecentlyEvent />
            <UpCommingEvents />
        </div>

    );
};

export default HomePage;