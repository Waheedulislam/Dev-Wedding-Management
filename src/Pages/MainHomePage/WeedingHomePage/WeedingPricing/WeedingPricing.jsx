import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import CancelIcon from "@mui/icons-material/Cancel";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const WeedingPricing = () => {
  const testimonials = [
    {
      text: "Quisquam est, qui dolorem ipsum quia dolor sit amet consequi doli aetur, adipisci velit, sed ruia non numquam eius modi temormagna incidunt ut labore et dolore magnam alieuam zuaerat volutavelit, se tem nostrum exercitationem.",
      name: "Cordia Wehner",
      position: "Event Planning",
      image:
        "https://designingmedia.com/bridely/wp-content/plugins/bridely-toolkit//assets/images/testimonial-default-img.jpg", // Replace with actual image URLs
    },
    {
      text: "Another testimonial text that goes here. This is a great service!",
      name: "John Doe",
      position: "Wedding Coordinator",
      image:
        "https://designingmedia.com/bridely/wp-content/plugins/bridely-toolkit//assets/images/testimonial-default-img.jpg",
    },
    {
      text: "Excellent experience! Highly recommend for anyone planning an event.",
      name: "Jane Smith",
      position: "Event Manager",
      image:
        "https://designingmedia.com/bridely/wp-content/plugins/bridely-toolkit//assets/images/testimonial-default-img.jpg",
    },
  ];

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

      <div className="bg-[#f0f7f7] min-h-screen py-[100px]">
        <img
          src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/body_bird-e1658928223548-1.png"
          alt=""
          className="ml-12"
        />
        <div className="max-w-4xl mx-auto py-10">
          <h2 className="text-[22px] font-bold text-center text-[#f4a492] mb-6">
            Hear From Our Newlyweds
          </h2>
          <h2 className="text-[50px] font-bold text-center mb-6">
            Love Stories Shared by Our Clients
          </h2>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Set the delay and interaction settings
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-[30px] rounded-br-none shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full mb-4"
                    width="100"
                    height="100"
                  />
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="grid grid-cols-5 px-[6px] sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-5 mt-[50px]">
            <div>
              <img
                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-2.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-3.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-4.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-3-testimonial-partner-img-5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="relative bg-cover bg-no-repeat min-h-[280px] pt-[30px]">
            <div className="flex flex-col items-center mb-6">
              <img
                loading="lazy"
                decoding="async"
                width="70"
                height="70"
                src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/instagram_icon.png"
                alt="Instagram Icon"
                className="w-20 h-20 md:w-24 md:h-24" // Responsive image size
              />
              <h2 className="text-black text-[40px] md:text-[50px] font-semibold mt-2 text-center">
                Instagram Feed
              </h2>{" "}
              {/* Responsive font size */}
            </div>
          </div>
        </div>
        <div>
          <div
            className="relative bg-cover bg-no-repeat min-h-screen"
            style={{
              backgroundImage:
                "url('https://designingmedia.com/bridely/wp-content/uploads/2022/07/sec11_background.jpg')",
            }}
          >
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-50 min-h-screen">
              <div className="flex flex-wrap justify-center gap-4 mt-[-100px]">
                {instagramData.map(({ id, imgSrc, link, alt }) => (
                  <div key={id} className="relative flex flex-col items-center group">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="255"
                      height="255"
                      src={imgSrc}
                      alt={alt}
                      className="w-64 h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                    />
                    <a
                      className="absolute inset-0 flex items-center justify-center bg-white text-black px-4 py-2 rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram mr-2"></i>
                      <InstagramIcon
                        style={{ color: "#f4a492", fontSize: "24px", marginRight: "5px" }}
                      />
                      <span className="text-sm md:text-base">Bridely</span>{" "}
                      {/* Responsive text size */}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeedingPricing;

const instagramData = [
  {
    id: 1,
    imgSrc: "https://designingmedia.com/bridely/wp-content/uploads/2022/07/coupleHands.jpg",
    link: "https://www.instagram.com/bridely",
    alt: "Couple Hands",
  },

  {
    id: 3,
    imgSrc: "https://designingmedia.com/bridely/wp-content/uploads/2022/07/sec10_couples.jpg",
    link: "https://www.instagram.com/bridely",
    alt: "Couples",
  },
  {
    id: 4,
    imgSrc: "https://designingmedia.com/bridely/wp-content/uploads/2022/07/instagram_123.pn_.jpg",
    link: "https://www.instagram.com/bridely",
    alt: "Instagram Image 1",
  },
];
