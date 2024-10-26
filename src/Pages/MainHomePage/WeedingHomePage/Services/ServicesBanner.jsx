import banner from "../../../../assets/weeding-banner.jpg";

const ServicesBanner = () => {
  return (
    <div className="relative">
      <img
        src={banner}
        alt="Wedding Banner"
        className="h-[calc(100vh-20vh)] w-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Experience Unforgettable Wedding Services
          </h1>
          <p className="text-xl text-white mt-4">
            Let us help you create a wedding day that`s truly unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
