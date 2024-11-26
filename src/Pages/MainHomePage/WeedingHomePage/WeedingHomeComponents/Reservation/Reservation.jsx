import { useContext, useState } from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaUsers } from "react-icons/fa";
import API from "../../../../../api/api";
import { toast } from "react-toastify";
import { AuthContext } from "../../../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        date: "",
        event: "",
        email: "",
        guests: "",
    });
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        if (!user) {
            navigate('/login')
        } else {
            e.preventDefault();
            console.log("Form Data Submitted:", formData);

            try {
                const response = await API.post('/reservation', formData);
                console.log(response);
                toast.success('Reservation submitted successfully!');

                // Reset the form
                setFormData({
                    fullName: "",
                    date: "",
                    event: "",
                    email: "",
                    guests: "",
                });
            } catch (err) {
                console.error(err);
                toast.error('Something went wrong. Please try again.');
            }
        }

    };



    return (
        <div className="bg-gradient-to-b from-[#F3F4F6] to-[#E0F7FA] py-16 px-6 flex flex-col items-center">
            <div className="container mx-auto">
                {/* Decorative Image */}
                <div className="flex justify-end items-end w-full">
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/hearts.png"
                        alt="decorative hearts"
                        className="w-32 h-32 mr-12 mt-8"
                    />
                </div>

                {/* Header and Description */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">Make Reservations</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Celebrate the union of [Bride’s Name] and [Select Event]! Join us for a day filled<br />  with love, laughter, and cherished memories.
                    </p>
                </div>

                {/* Reservation Form */}
                <form
                    className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-6"
                    onSubmit={handleSubmit}
                >
                    {/* Full Name */}
                    <div className="flex flex-col">
                        <label htmlFor="fullName" className="text-gray-700 font-medium mb-2">
                            Full Name
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring focus-within:ring-[#9ACCC9]">
                            <FaUser className="h-8 w-8 text-[#9ACCC9] ml-3" />
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Your Full Name"
                                className="flex-grow p-4 focus:outline-none bg-transparent"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Select Date */}
                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-gray-700 font-medium mb-2">
                            Date
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring focus-within:ring-[#9ACCC9]">
                            <FaCalendarAlt className="h-8 w-8 text-[#9ACCC9] ml-3" />
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="flex-grow p-4 focus:outline-none bg-transparent"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Select Event */}
                    <div className="flex flex-col">
                        <label htmlFor="event" className="text-gray-700 font-medium mb-2">
                            Event
                        </label>
                        <select
                            id="event"
                            name="event"
                            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring focus:ring-[#9ACCC9] bg-white"
                            value={formData.event}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>
                                Select Event
                            </option>
                            <option value="entertainment">Entertainment</option>
                            <option value="dining">Dining</option>
                            <option value="decor">Decor</option>
                            <option value="swag_and_gifting">Swag and Gifting</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring focus-within:ring-[#9ACCC9]">
                            <FaEnvelope className="h-8 w-8 text-[#9ACCC9] ml-3" />
                            <input
                                type="email"
                                id="email"
                                value={user?.email}
                                name="email"
                                placeholder="Your Email Address"
                                className="flex-grow p-4 focus:outline-none bg-transparent"
                                // value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Guests */}
                    <div className="flex flex-col">
                        <label htmlFor="guests" className="text-gray-700 font-medium mb-2">
                            Number of Guests
                        </label>
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring focus-within:ring-[#9ACCC9]">
                            <FaUsers className="h-8 w-8 text-[#9ACCC9] ml-3" />
                            <input
                                type="number"
                                id="guests"
                                name="guests"
                                placeholder="Number of Guests"
                                className="flex-grow p-4 focus:outline-none bg-transparent"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 lg:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-4 bg-[#9ACCC9] text-white font-semibold rounded-lg shadow hover:bg-[#f4a492] focus:outline-none focus:ring focus:ring-[#9ACCC9] transition duration-300"
                        >
                            Submit Reservation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reservation;
