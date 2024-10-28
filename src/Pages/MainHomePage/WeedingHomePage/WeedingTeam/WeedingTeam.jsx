import { useState } from "react";
import NavigationBreadcrumb from "../../../../Components/Shared/NavigationBreadcrumb/NavigationBreadcrumb";
import Modal from "react-modal";

// Set the modal element
Modal.setAppElement("#root"); // Ensure this matches your app root
const WeedingTeam = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div
        className="flex items-center justify-center pb-0 mt-[60px] md:mt-0 lg:mt-0 md:min-h-[520px] lg:min-h-[520px] bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://designingmedia.com/bridely/wp-content/themes/bridely/assets/img/sub-banner-img.jpg')",
          backgroundSize: "contain",
        }}
      >
        <div className="text-center text-white bg-black bg-opacity-50 p-4 md:p-6 lg:p-8 rounded-md max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
            Meet Our Creative Event Organizers
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            Our dedicated team of event organizers brings passion and creativity to every occasion.
            With a focus on collaboration and personalization, we ensure your event is a true
            reflection of your vision. Let us make your next celebration unforgettable!
          </p>
          <div className="flex justify-center items-center">
            <NavigationBreadcrumb />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10">
        <div className="flex flex-col justify-center p-4 max-w-lg text-center md:text-left">
          <h5 className="text-lg font-medium">Who We Are</h5>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Planner for Your Perfect Wedding</h2>
          <p className="text-sm md:text-base mb-4">
            Our dedicated team of professionals is here to help you plan the wedding of your dreams.
            From conceptualization to execution, we ensure every detail is perfect.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li className="flex items-center mb-2">
              <i className="far fa-check-circle mr-2"></i>
              <span>Quam felis ultricies nec pellentesque eu pretium</span>
            </li>
            <li className="flex items-center mb-2">
              <i className="far fa-check-circle mr-2"></i>
              <span>Fringilla velealiquet nec vulputate eget arcu In eni</span>
            </li>
            <li className="flex items-center mb-2">
              <i className="far fa-check-circle mr-2"></i>
              <span>Yusto rhoncusut imperdiet a venenatis vitae.</span>
            </li>
          </ul>
          <a
            href="https://designingmedia.com/bridely/contact-us/"
            className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="relative flex items-center justify-center mt-6 md:mt-0">
          <img
            className="hidden md:block absolute -top-16 -right-10 w-28 "
            src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/body_bird-e1658928262504.png"
            alt="Bird Icon"
          />

          <img
            className="w-full max-w-xs md:max-w-lg object-cover"
            src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/about_image1.jpg"
            alt="Event Organizer"
          />
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="text-center w-full">
          <img
            className=" mx-auto"
            src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/Design_element.png"
            alt=""
          />
        </div>
        <h2 className="text-center text-3xl font-bold mb-8">Meet Our Creative Event Organizer</h2>
        <p className="text-center mb-10">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed doeiusm tempor incididunt.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <a href={member.link} className="block">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h6 className="text-lg font-semibold">{member.name}</h6>
                  <div className="flex justify-center space-x-3 mt-2 text-black"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage:
            "url('https://designingmedia.com/bridely/wp-content/uploads/2022/07/sec11_background.jpg')",
        }}
        className="relative flex flex-col items-center justify-center  py-20 min-h-screen opacity-9"
      >
        <div className="">
          <h2 className="text-4xl font-bold mb-4 text-white">Bridely Presentation</h2>
          <p className="text-center mb-8 text-white">
            Watch our introduction video to learn more about Bridely!
          </p>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white rounded-full p-4 flex items-center justify-center transition duration-300 ease-in-out hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.597-2.1A1 1 0 009 10.002v4a1 1 0 001.155.845l3.597-2.1a1 1 0 000-1.736z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12c0-5.523-4.477-10-10-10S1 6.477 1 12s4.477 10 10 10 10-4.477 10-10z"
              />
            </svg>
            Play Video
          </button>
        </div>

        {/* Modal for YouTube video */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className="flex items-center justify-center min-h-screen"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          <button
            onClick={closeModal}
            className=" absolute right-[60px] top-[120px]  text-white hover:text-gray-800 text-2xl font-bold"
          >
            &times;
          </button>
          <iframe
            className="absolute md:w-[1632px] sm:w-[auto]"
            height="779"
            src="https://www.youtube.com/embed/XHOmBV4js_E"
            title="Video Placeholder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Modal>
      </div>
    </div>
  );
};

export default WeedingTeam;

const teamMembers = [
  {
    name: "Stephen Michael",
    image: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-5.jpg",
    link: "https://designingmedia.com/bridely/bridely_team/stephen-michael/",
    social: [
      { icon: "faFacebookF", url: "#" },
      { icon: "faTwitter", url: "#" },
      { icon: "faInstagram", url: "#" },
    ],
  },
  {
    name: "Shawn Dellinger",
    image: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-6.jpg",
    link: "https://designingmedia.com/bridely/bridely_team/shawn-dellinger/",
    social: [
      { icon: "faFacebookF", url: "#" },
      { icon: "faTwitter", url: "#" },
      { icon: "faInstagram", url: "#" },
    ],
  },
  {
    name: "Felicitas Creager",
    image: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-7.jpg",
    link: "https://designingmedia.com/bridely/bridely_team/felicitas-creager/",
    social: [
      { icon: "faFacebookF", url: "#" },
      { icon: "faTwitter", url: "#" },
      { icon: "faInstagram", url: "#" },
    ],
  },
  {
    name: "Alayna Rolfson",
    image: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-8.jpg",
    link: "https://designingmedia.com/bridely/bridely_team/alayna-rolfson/",
    social: [
      { icon: "faFacebookF", url: "#" },
      { icon: "faTwitter", url: "#" },
      { icon: "faInstagram", url: "#" },
    ],
  },
  {
    name: "Alisha Rees",
    image: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-1.jpg",
    link: "https://designingmedia.com/bridely/bridely_team/alisha-rees/",
    social: [
      { icon: "faFacebookF", url: "#" },
      { icon: "faTwitter", url: "#" },
      { icon: "faInstagram", url: "#" },
    ],
  },
  {
    name: "Rhys Carter",
    image: "https://designingmedia.com/bridely/wp-content/uploads/2024/01/team-img-2.jpg",
    link: "https://designingmedia.com/bridely/bridely_team/rhys-carter/",
    social: [
      { icon: "faFacebookF", url: "#" },
      { icon: "faTwitter", url: "#" },
      { icon: "faInstagram", url: "#" },
    ],
  },
];
