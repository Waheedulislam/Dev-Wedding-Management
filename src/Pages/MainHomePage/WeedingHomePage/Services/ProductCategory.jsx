import { Button } from "@mui/material";
import img1 from "../../../../assets/icons/catering.jpg";
import img2 from "../../../../assets/icons/chairs.jpg";
import img3 from "../../../../assets/icons/weddingWalls.jpg";
import img4 from "../../../../assets/icons/metalCircles.jpg";
import img5 from "../../../../assets/icons/planIcon.png";
import backgroundImage from "../../../../assets/icons/heartsBanner.jpg"; // Added background image

const ProductCategory = () => {
  return (
    <div
      className="my-20 py-8 px-4 rounded-lg shadow-lg h-screen flex md:flex-row flex-col-reverse justify-center items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mx-auto container px-2">
        {/* Right Section: Call to Action */}
        <div className="flex flex-col items-center gap-6 w-full md:w-1/2 text-center md:text-left">
          <img
            src={img5}
            alt="Plan Icon"
            className="w-36 h-36 mx-auto md:mx-0 "
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Includes Various Product Categories
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className="px-6 py-3 text-lg hover:bg-blue-700 hover:text-white transition duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Left Section: Event Categories */}
        <div className="grid grid-cols-2 md:grid-cols-2 w-full md:w-1/2 gap-3">
          {[
            { img: img1, label: "Catering" },
            { img: img2, label: "Seating Arrangements" },
            { img: img3, label: "Wedding Decorations" },
            { img: img4, label: "Lighting and Sound" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 p-2 hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white/80"
            >
              <img
                src={item.img}
                alt={`${item.label} Icon`}
                className="w-full h-full mb-2 object-cover "
              />
              <p className="text-lg font-semibold text-center text-gray-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
