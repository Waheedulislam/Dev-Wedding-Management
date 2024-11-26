import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const WeddingNextPlan = () => {
    return (
        <div className="flex mt-12 container mx-auto px-4  md:flex-row items-center justify-between p-8 flex-col-reverse">

            {/* Middle Section - Text Content */}
            <div className="w-full md:w-1/2 mb-6 text-center md:text-left space-y-4">
                <div className="h-28 w-28 -mb-16">
                    <img src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-plan-section-content-shape.png " alt="" />
                </div>
                <p className="text-2xl  text-[#f4a492]">Dedicated Wedding Planners</p>
                <h2 className="text-5xl  font-bold text-gray-800">
                    Let's Plan Your <br /> Next Event
                </h2>
                <p className="text-gray-600">
                    Whether you’re planning a corporate event, a social gathering, or a wedding, let Bridely be your partner in creating unforgettable memories. Contact us today to schedule a consultation and start planning your next event.
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
                    src="https://designingmedia.com/bridely/wp-content/uploads/2024/03/home-2-plan-section-img.png"
                    alt="Couple Banner"
                    className="w-full h-full max-w-md rounded-lg -mb-8"
                />
            </div>
        </div>
    );
};

export default WeddingNextPlan;
