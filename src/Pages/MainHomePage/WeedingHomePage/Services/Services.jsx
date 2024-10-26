import EventPlaning from "./EventPlaning";
import ProductCategory from "./ProductCategory";
import ServicesBanner from "./ServicesBanner";

const Services = () => {
  return (
    <div>
      <ServicesBanner />
      <div className="container mx-auto px-2">
        <EventPlaning />
      </div>
      <ProductCategory />
    </div>
  );
};

export default Services;
