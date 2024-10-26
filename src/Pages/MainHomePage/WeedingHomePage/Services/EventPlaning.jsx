import { Button } from "@mui/material";
import img1 from "../../../../assets/icons/gift1.png";
import img4 from "../../../../assets/icons/planIcon.png";
const EventPlaning = () => {
  return (
    <div className="my-20 py-4 px-2">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mx-auto ">
        {/* Left Section: Event Categories */}
        <div className="grid grid-cols-2 md:grid-cols-2  w-full md:w-1/2">
          {[
            "Wedding Planning",
            "Corporate Events",
            "Social Gatherings",
            "Entertainment",
          ].map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-200 p-4  hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={img1}
                alt={event}
                className="w-20 h-20 mb-2 object-cover"
              />
              <p className="text-lg font-semibold text-center">{event}</p>
            </div>
          ))}
        </div>

        {/* Right Section: Call to Action */}
        <div className="flex flex-col items-center gap-4 w-full md:w-1/2 text-center md:text-left">
          <img
            src={img4}
            alt="Plan Icon"
            className="w-24 h-24 mx-auto md:mx-0"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              Let&apos;s Plan Your Next Event Together
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPlaning;
