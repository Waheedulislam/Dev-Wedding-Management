import BannerSection from "./BannerSection/BannerSection";
import EventItems from "./EventItems/EventsItem";
import Gallery from "./Gallery/Gallery";
import PricingPlan from "./PricingPlan/PricingPlan";
import RecentlyEvent from "./RecentEvent/RecentEvent";
import UpCommingEvents from "./UpCommingEvents/UpCommingEvents";

const HomePage = () => {
    return (

        <div className="container mx-auto px-2">
            <h1 className="text-3xl font-bold underline">This is home</h1>
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