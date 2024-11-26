import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const WeedingBanner = () => {
    return (
        <div className=" bg-[#9ACCC9] bg-opacity-20 py-4 mt-16 ">
            <div className="flex mt-12  c container mx-auto px-4 flex-col-reverse md:flex-row items-center justify-between p-8 ">

                {/* Middle Section - Text Content */}
                <div className="w-full md:w-1/2 mb-6 text-center md:text-left space-y-4">
                    <div className="h-28 w-28 -mb-12">
                        <img src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/Banner_ring.png" alt="" />
                    </div>
                    <p className="text-2xl  text-[#f4a492]">Dedicated Wedding Planners</p>
                    <h2 className="lg:text-7xl text-3xl  font-bold text-gray-800">
                        Creating  <br /> Unforgettable Moments
                    </h2>
                    <p className="text-gray-600 text-xl font-semibold my-4">
                        We specialize in creating unforgettable <br /> experiences that exceed your expectations
                    </p>
                    <Link to='/Reservation'>
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                backgroundColor: '#9ACCC9', // Initial background color
                                color: 'white',
                                width: '200px',
                                height: '60px',
                                marginTop: '15px',
                                borderRadius: '50px', // Full-rounded
                                '&:hover': {
                                    backgroundColor: '#F4A492', // Hover background color
                                    color: 'white', // Keep text color white on hover
                                },
                            }}
                        >
                            Make Reservation
                        </Button>
                    </Link>



                </div>

                {/* Right Section - Image */}
                <div className="flex justify-center w-full md:w-1/2">
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-banner-img.png"
                        alt="Couple Banner"
                        className="w-full h-full max-w-xl rounded-lg -mb-12"
                    />
                </div>
            </div>
        </div>
    );
};

export default WeedingBanner;