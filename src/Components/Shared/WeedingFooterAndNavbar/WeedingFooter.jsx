// src/Footer.js

import { Button, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Google, Email, Phone, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const WeedingFooter = () => {
    return (
        <footer className="bg-gray-50  ">
            {/* Header Section with Title and Buttons */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mb-20 text-center p-6">
                <h1 className="text-3xl lg:text-5xl font-semibold text-gray-800">Lets Start Planning!</h1>
                <div className="flex gap-4 mt-4 lg:mt-0">
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{
                            backgroundColor: '#9ACCC9',
                            color: 'white',
                            width: '200px', // Set desired width
                            height: '60px',  // Set desired height
                            borderRadius: '50px', // Full-rounded
                            '&:hover': { backgroundColor: '#7FB8B2' }
                        }}
                    >
                        Make Reservation
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            borderColor: '#F4A492',
                            color: '#F4A492',
                            width: '200px',
                            height: '60px',
                            borderRadius: '50px',
                            '&:hover': { backgroundColor: '#F4A492', color: 'white' }
                        }}
                    >
                        Learn More
                    </Button>
                </div>


            </div>

            {/* Background Decorative Image */}
            <div className="text-center ">
                <img src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/hearts.png" alt="decorative hearts" className="mx-auto w-16 md:w-20 lg:w-24" />
            </div>

            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center  lg:space-y-0 lg:space-x-8">
                {/* Left Section - Logo and Description */}
                <div className="text-center text-black lg:text-left w-full lg:w-1/3 bg-[#9ACCC9] bg-opacity-20  p-10 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className="bg-gray-200 p-4 rounded-full shadow-md">
                            <span className="text-2xl font-bold text-gray-700">W</span>
                        </div>
                        <h2 className="text-3xl text-[#F4A492]  ml-2">WEEDING PRO</h2>
                    </div>
                    <p className=" max-w-xs mx-auto lg:mx-0 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor lorem ipsum dolor sit amet.
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center lg:justify-start mt-6 space-x-3">
                        <IconButton aria-label="Facebook" style={{ backgroundColor: '#4267B2', color: 'white' }} className="rounded-full shadow">
                            <Facebook />
                        </IconButton>
                        <IconButton aria-label="Twitter" style={{ backgroundColor: '#1DA1F2', color: 'white' }} className="rounded-full shadow">
                            <Twitter />
                        </IconButton>
                        <IconButton aria-label="LinkedIn" style={{ backgroundColor: '#0077B5', color: 'white' }} className="rounded-full shadow">
                            <LinkedIn />
                        </IconButton>
                        <IconButton aria-label="Google" style={{ backgroundColor: '#DB4437', color: 'white' }} className="rounded-full shadow">
                            <Google />
                        </IconButton>
                    </div>
                </div>

                {/* Middle Section - Company Links */}
                <div className="text-center w-full lg:w-1/3 space-y-4 my-8">
                    <h3 className="text-3xl  text-[#9ACCC9]">COMPANY</h3>
                    <div className="flex  flex-row  justify-center items-center gap-10">
                        <ul className="space-y-2 ">
                            <li className="flex pt-2   items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                            </li>
                            <li className="flex pt-2   items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                            </li>
                            <li className="flex pt-2   items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
                            </li>
                            <li className="flex pt-2  items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex pt-2  items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/support" className="text-gray-600 hover:text-gray-800">Support</Link>
                            </li>
                            <li className="flex pt-2  items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/career" className="text-gray-600 hover:text-gray-800">Career</Link>
                            </li>
                            <li className="flex pt-2  items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/faq" className="text-gray-600 hover:text-gray-800">FAQ</Link>
                            </li>
                            <li className="flex pt-2  items-center space-x-2">
                                <ArrowForward fontSize="small" className="text-gray-600" />
                                <Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section - Contact Info with Icons */}
                <div className="text-center w-full lg:w-1/3 space-y-6"> {/* Increased space-y to add more gap */}
                    <div className="flex  items-center lg:pr-14 justify-center text-gray-600 space-x-4"> {/* Adjusted space-x for better gap */}
                        <Phone fontSize="large" style={{ color: '#9ACCC9' }} />
                        <div className="text-gray-800 font-semibold text-left"> {/* Added text-left for better alignment */}
                            <span className="text-2xl text-[#F4A492] ">Call Us :</span><br /><span className='text-xl'>(123) 456-789-00</span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center text-gray-600 space-x-4"> {/* Same adjustments as above */}
                        <Email fontSize="large" style={{ color: '#9ACCC9' }} />
                        <div className="text-gray-800 font-semibold text-left">
                            <span className="text-2xl text-[#F4A492] ">Email Us :</span><br /><span className='text-xl'>weedingpro@gmil.com</span>
                        </div>
                    </div>

                </div>

            </div>


            {/* Last Image */}
            <div className="flex justify-end items-end ">
                <img
                    className="w-96 opacity-30 h-96 -my-16 object-contain"
                    src="http://localhost:5173/src/assets/icons/planIcon.png?t=1729953486464"
                    alt="Plan Icon"
                />
            </div>

            {/* Footer Bottom */}
            <div className=" text-center text-gray-900 bg-opacity-30 bg-[#9ACCC9] p-8"> {/* Added background color and padding */}
                © Copyright Weeding Pro 2024. All Rights Reserved
            </div>
        </footer>
    );
};

export default WeedingFooter;
