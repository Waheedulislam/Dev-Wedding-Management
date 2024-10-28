import EventPlaning from "./EventPlaning";
import OurTalentedTeam from "./OurTelentedTeam";
import ProductCategory from "./ProductCategory";
import ServicesBanner from "./ServicesBanner";
import WeedingInsparation from "./WeedingInsparation";

const Services = () => {
  return (
    <div>
      <ServicesBanner
        imageUrl="https://img.freepik.com/premium-photo/picture-water-sky-with-some-leaves-it_1044943-50255.jpg"
        title="Experience Unforgettable Wedding Services"
        subtitle="Let us help you create a wedding day that’s truly unforgettable."
        textColor="text-black"
      />

      <div className="container mx-auto px-2">
        <EventPlaning />
      </div>
      <ProductCategory />
      <OurTalentedTeam />
      <WeedingInsparation />
    </div>
  );
};

export default Services;
