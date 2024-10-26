import bannerimg from "../../../assets/weeding-banner.jpg";
const WeedingMainHomePage = () => {
  return (
    <div className="relative">
      <div className="hero bg-slate-400 min-h-screen">
        <img
          src={bannerimg}
          alt="Wedding Banner"
          className="h-[calc(100vh-20vh)] w-full object-cover"
        />
        <div className="hero-content text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-5xl font-bold text-pink-700">
              Welcome to Weeding
            </h1>
            <p className="py-6 text-gray-800">
              Explore the world of wedding planning with us. From finding the
              perfect venue to crafting unforgettable experiences, we`re here to
              guide you every step of the way.
            </p>
            <button className="btn btn-primary bg-pink-700 hover:bg-pink-800">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeedingMainHomePage;
