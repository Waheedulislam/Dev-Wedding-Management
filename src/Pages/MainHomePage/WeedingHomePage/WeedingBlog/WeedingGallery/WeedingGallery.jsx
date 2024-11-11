import BannerSection from "../../../../../Components/Shared/BannerSection/BannerSection";
import UnforgettableEvents from "../../WeedingHomeComponents/UnforgettableEvents/UnforgettableEvents";
import InstagramFeed from "../../WeedingPricing/InstagramFeed";


const WeedingGallery = () => {

    return (
        <div>
            <BannerSection
                bannerSectionTitle="Gallery"
                bannerSectionDescription={description}
            />
            <UnforgettableEvents />
            <InstagramFeed />
        </div>
    );
};

export default WeedingGallery;

const description =
    "A wedding management gallery section on a wedding planner website can include engagement photos, pictures from the first date, and other special moments.";