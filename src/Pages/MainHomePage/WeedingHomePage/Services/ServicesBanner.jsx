import banner from "../../../../assets/weeding-banner.jpg";

const ServicesBanner = () => {
  return (
    <div className="relative">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7bkIg7ervTP16vLvjDxivQ6FGH3zmr7wfaWsMBfqK7YWHSHG9"
        alt="Wedding Banner"
        className="h-[calc(100vh-20vh)] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10  flex items-center justify-center">
        <div className="">
          <h1 className="text-4xl font-bold text-black">
            Experience Unforgettable Wedding Services
          </h1>
          <p className="text-xl text-black  mt-4">
            Let us help you create a wedding day that`s truly unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
