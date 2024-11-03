import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import CancelIcon from "@mui/icons-material/Cancel";
import InstagramFeed from "./InstagramFeed";
import WeedingSlider from "../../../../Components/Shared/WeedingSlider/WeedingSlider";

const WeedingPricing = () => {

  return (
    <div className="">
      <div
        className="flex items-center justify-center  pb-0  mt-[60px] md:mt-0 lg:mt-0 md:min-h-[520px] lg:min-h-[520px] bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://designingmedia.com/bridely/wp-content/themes/bridely/assets/img/sub-banner-img.jpg')",
          backgroundSize: "contain",
        }}
      >
        <div className="text-center  text-white bg-black bg-opacity-50 p-4 md:p-6 lg:p-8 rounded-md max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Discover Our Wedding Packages
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Explore our exclusive wedding packages designed to make your special day unforgettable.
            Find the perfect package that suits your style and budget.
          </p>
          <div className="flex justify-center items-center">
            <NavigationBreadcrumb></NavigationBreadcrumb>
          </div>
        </div>
      </div>
      {/* start Pricing Plans */}
      <div className="flex flex-col items-center py-16  bg-gradient-to-b from-[white] to-[#e5f5f4]">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Pricing Plans</h2>
        <p className="text-lg text-gray-600 mb-12">Pricing Plans for Your Dream Wedding</p>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
          {/* Basic Plan */}
          <div className="group relative flex flex-col items-center bg-white border border-transparent rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 w-full md:w-80 lg:w-96 p-8 hover:border-pink-500  bg-clip-padding bg-gradient-to-tr from-pink-100 to-transparent">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic</h3>
            <div className="relative p-4 border-2 border-pink-400 rounded-full bg-white shadow-lg mb-4">
              <div className="flex items-end justify-center space-x-1">
                <span className="text-4xl font-bold text-pink-500">$</span>
                <span className="text-5xl font-bold text-gray-800">599</span>
                <span className="text-xl font-semibold text-gray-700">.99</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center px-4">
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left  pl-5 list-none">
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Full-service Wedding Planning And Coordination
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Unlimited Consultations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Design And Decor Assistance
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Guest Management Services
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Vendor Management And Negotiations
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Rehearsal Dinner Coordination
              </li>
            </ul>
            <button className="mt-6 py-2 px-8 bg-pink-600 text-white rounded-full font-semibold transform transition duration-300 hover:bg-pink-700 hover:scale-105 shadow-md">
              Make Reservation
            </button>
          </div>

          {/* Standard Plan */}
          <div className="group relative flex flex-col items-center bg-white border border-transparent rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 w-full md:w-80 lg:w-96 p-8 hover:border-pink-500 bg-clip-padding bg-gradient-to-tr from-transparent to-pink-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard</h3>
            <div className="relative p-4 border-2 border-pink-400 rounded-full bg-white shadow-lg mb-4">
              <div className="flex items-end justify-center space-x-1">
                <span className="text-4xl font-bold text-pink-500">$</span>
                <span className="text-5xl font-bold text-gray-800">799</span>
                <span className="text-xl font-semibold text-gray-700">.99</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center px-4">
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left  pl-5 list-none">
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Full-service Wedding Planning And Coordination
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Unlimited Consultations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Design And Decor Assistance
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Guest Management Services
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Vendor Management And Negotiations
              </li>
              <li>
                <CancelIcon style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }} />
                Rehearsal Dinner Coordination
              </li>
            </ul>
            <button className="mt-6 py-2 px-8 bg-pink-600 text-white rounded-full font-semibold transform transition duration-300 hover:bg-pink-700 hover:scale-105 shadow-md">
              Make Reservation
            </button>
          </div>

          {/* Premium Plan */}
          <div className="group relative flex flex-col items-center bg-white border border-transparent rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 w-full md:w-80 lg:w-96 p-8 hover:border-pink-500 bg-clip-padding bg-gradient-to-b from-pink-100 to-transparent">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium</h3>
            <div className="relative p-4 border-2 border-pink-400 rounded-full bg-white shadow-lg mb-4">
              <div className="flex items-end justify-center space-x-1">
                <span className="text-4xl font-bold text-pink-500">$</span>
                <span className="text-5xl font-bold text-gray-800">999</span>
                <span className="text-xl font-semibold text-gray-700">.99</span>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-center px-4">
              Cum sociis natoque penatibus et magnis dis parturient montes.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm text-left  pl-5 list-none">
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Full-service Wedding Planning And Coordination
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Unlimited Consultations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Design And Decor Assistance
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Guest Management Services
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Vendor Management And Negotiations
              </li>
              <li>
                <CheckCircleOutlineIcon
                  style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                />
                Rehearsal Dinner Coordination
              </li>
            </ul>
            <button className="mt-6 py-2 px-8 bg-pink-600 text-white rounded-full font-semibold transform transition duration-300 hover:bg-pink-700 hover:scale-105 shadow-md">
              Make Reservation
            </button>
          </div>
        </div>
      </div>

      {/* slider  */}
      <WeedingSlider />

      {/* Instagram Feed  */}
      <InstagramFeed />
    </div>
  );
};

export default WeedingPricing;

