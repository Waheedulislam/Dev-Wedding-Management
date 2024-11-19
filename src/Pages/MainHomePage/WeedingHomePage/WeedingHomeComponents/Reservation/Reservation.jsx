import { useState } from "react";
import { FaUser, FaEnvelope, FaCalendarAlt, FaUsers } from "react-icons/fa";
import API from "../../../../../api/api";
import { toast } from "react-toastify";

const Reservation = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        date: "",
        event: "",
        email: "",
        guests: "",
    });

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
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        const response = await API.post('/reservation')
            .then((res) => {
                console.log(res)
                toast.success('Successfully Reservation Submit')
            })
        console.log(response)
        // You can process the `formData` object as needed here
    };

    return (
        <div className="bg-[#9ACCC9] pb-24 bg-opacity-15 flex flex-col items-center">
            <div className="container mx-auto px-3">
                {/* Decorative Image */}
                <div className="flex justify-end items-end w-full">
                    <img
                        src="https://designingmedia.com/bridely/wp-content/uploads/2022/07/hearts.png"
                        alt="decorative hearts"
                        className="w-32 h-32 mr-12 mt-8"
                    />
                </div>

                {/* Header and Description */}
                <div className="text-center -mt-4">
                    <h1 className="text-6xl text-gray-900 font-semibold">Make Reservations</h1>
                    <p className="my-12 text-lg text-gray-700">
                        We are thrilled to announce the wedding of [Bride’s Name] and [Select Event].
                        Join us for a day <br />
                        filled with joy, laughter, and unforgettable moments as we tie the knot.
                    </p>
                </div>

                {/* Reservation Form */}
                <form
                    className="w-full max-w-7xl mx-auto p-8 lg:px-20 bg-white rounded-lg shadow-lg lg:flex gap-8"
                    onSubmit={handleSubmit}
                >
                    <div className="lg:w-1/2">
                        {/* Full Name */}
                        <div className="mb-8">
                            <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                                Name:
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <FaUser className="h-8 pl-3 w-8 text-[#9ACCC9]" />
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Your Full Name"
                                    className="flex-grow p-4 text-gray-700 focus:outline-none focus:border-[#9ACCC9] rounded-full bg-transparent"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Select Date */}
                        <div className="mb-8">
                            <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                                Select Date:
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <FaCalendarAlt className="h-8 pl-3 w-8 text-[#9ACCC9]" />
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="flex-grow p-4 text-gray-700 focus:outline-none focus:border-[#9ACCC9] rounded-full bg-transparent"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Select Event */}
                        <div className="mb-8">
                            <label htmlFor="event" className="block text-gray-700 font-semibold mb-2">
                                Select Event:
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <select
                                    id="event"
                                    name="event"
                                    className="flex-grow p-4 text-gray-700 focus:outline-none focus:border-[#9ACCC9] rounded-full bg-transparent"
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
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        {/* Email */}
                        <div className="mb-8">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email:
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <FaEnvelope className="h-8 pl-3 w-8 text-[#9ACCC9]" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email Address"
                                    className="flex-grow p-4 text-gray-700 focus:outline-none focus:border-[#9ACCC9] rounded-full bg-transparent"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Guests */}
                        <div className="mb-8">
                            <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
                                Guests:
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                                <FaUsers className="h-8 pl-3 w-8 text-[#9ACCC9]" />
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    placeholder="Number of Guests"
                                    className="flex-grow p-4 text-gray-700 focus:outline-none focus:border-[#9ACCC9] rounded-full bg-transparent"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full mt-8 rounded-full bg-[#9ACCC9] text-white font-semibold py-5 transition duration-300 hover:bg-[#F4A492]"
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
