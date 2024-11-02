import React from "react";
import { Button } from "@mui/material";


const AboutBridely = () => {
    return (
        <section className="bg-blue-50 py-12 px-6 lg:px-24 xl:px-36">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left: Image Collage */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Wedding 1"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Wedding 2"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Wedding 3"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Wedding 4"
                className="w-32 h-32 rounded-lg shadow-lg"
              />
            </div>
          </div>
  
          {/* Right: Text and Button */}
          <div className="text-center lg:text-left space-y-6">
            <h3 className="text-pink-600 text-sm font-semibold">About Bridely</h3>
            <h2 className="text-gray-900 text-3xl lg:text-4xl font-bold">
              What We Do, We Do With Passion
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.
            </p>
            <Button
              variant="outlined"
              color="success"
              sx={{
                borderRadius: "999px",
                paddingX: "1.5rem",
                paddingY: "0.75rem",
                "&:hover": {
                  backgroundColor: "green",
                  color: "white",
                },
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
  
        {/* Statistics Section */}
        <div className="mt-12 lg:mt-20 bg-pink-200 p-6 lg:px-12 rounded-lg shadow-md text-center grid grid-cols-2 sm:grid-cols-4 gap-4 text-pink-700 font-semibold text-xl lg:text-2xl">
          <div>
            <span>1565+</span>
            <p className="text-gray-600 text-sm">Happy Couples</p>
          </div>
          <div>
            <span>1680+</span>
            <p className="text-gray-600 text-sm">Weddings</p>
          </div>
          <div>
            <span>845+</span>
            <p className="text-gray-600 text-sm">Decoration</p>
          </div>
          <div>
            <span>175+</span>
            <p className="text-gray-600 text-sm">Locations</p>
          </div>
        </div>
      </section>

    );
};

export default AboutBridely;