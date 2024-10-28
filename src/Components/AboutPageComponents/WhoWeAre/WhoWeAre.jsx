import React from 'react';
import { Button } from '@mui/material';
import couple from '../../../assets/images/about/couple.jpg';
import bird from '../../../assets/images/about/body_bird.png';


const WhoWeAre = () => {
    return (
        <div className="container mx-auto">
        <div className="flex flex-col justify-around md:flex-row md:space-x-8 h-screen  lg:space-x-2 items-center bg-white p-6 md:p-8 lg:p-12">
          {/* Text Section */}
          <div className="flex flex-col space-y-4 text-left relative">
            {/* img */}
            <div className='absolute xl:-right-44 right-0 lg:-top-8'>
                <img src={bird} alt="" />
            </div>
            <h3 id='who' className="text-[#f4a492] text-sm md:text-[22px] font-light">Who We Are</h3>
            <h2 className="text-black text-2xl md:text-3xl lg:text-[50px] lg:leading-[1.1em] text-balance font-bold">
              Planner for Your <br />  Perfect Wedding
            </h2>
            <p className="text-[#555555] text-sm md:text-base text-[22px] text-balance lg:leading-relaxed my-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit <br /> sed do eiusmod tempor incididunt donec quam felis ultri <br />cies nec, pellentesque eu, pretium quis sem.
            </p>
            <ul className="list-none space-y-2 text-sm md:text-base">
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-green-500 mr-2">✔️</span>
                <p className="text-[#555555]">Quam felis ultricies nec pellentesque eu pretium</p>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-green-500 mr-2">✔️</span>
                <p className="text-[#555555]">Fringilla velealiquet nec vulputate eget arcu In eni</p>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-green-500 mr-2">✔️</span>
                <p className="text-[#555555]">Yusto rhoncusut imperdiet a venenatis vitae.</p>
              </li>
            </ul>
            <div className="flex justify-center md:justify-start pt-8">
              <Button
                variant="outlined"
                color="success"
                className="mt-4 border-2 border-[#9BCCC9]  hover:bg-[#9BCCC9] hover:text-white"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
          {/* Image Section */}
          <div className="mt-8 md:mt-0">
            <img
              src={couple} // Replace with actual image source
              alt="Wedding Planner"
              className="who-we-are-img w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    );
};

export default WhoWeAre;