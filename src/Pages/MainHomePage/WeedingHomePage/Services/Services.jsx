import EventPlaning from "./EventPlaning";
import ServicesBanner from "./ServicesBanner";

const Services = () => {
  return (
    <div>
      <ServicesBanner />
      <div className="container mx-auto px-2">
        <EventPlaning />
      </div>
    </div>
  );
};

export default Services;
