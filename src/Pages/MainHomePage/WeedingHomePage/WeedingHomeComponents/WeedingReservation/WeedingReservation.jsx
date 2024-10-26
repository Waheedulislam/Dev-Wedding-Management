import { useState } from "react";

const WeddingReservation = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        date: "",
        email: "",
        guests: "",
        event: "entertainment",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
    };

    return (
        <div className=" mt-20  bg-[#9ACCC9] bg-opacity-15 flex flex-col items-center">
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
                <h1 className="text-5xl font-semibold">Make Reservations</h1>
                <p className="my-8 text-lg">
                    We are thrilled to announce the wedding of [Bride’s Name] and [Select Event].<br />
                    Join us for a day filled with joy, laughter, and unforgettable moments as we tie the knot.
                </p>
            </div>

            {/* Reservation Form */}
            <form
                className="w-full  max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg lg:flex gap-8"
                onSubmit={handleSubmit}
            >
                <div className="lg:w-1/2">
                    {/* Full Name */}
                    <div className="mb-6">
                        <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#9ACCC9]"
                            required
                        />
                    </div>

                    {/* Select Date */}
                    <div className="mb-6">
                        <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">
                            Select Date:
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#9ACCC9]"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email Address"
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#9ACCC9]"
                            required
                        />
                    </div>
                </div>

                <div className="lg:w-1/2">
                    {/* Guests */}
                    <div className="mb-6">
                        <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
                            Guests:
                        </label>
                        <input
                            type="number"
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            placeholder="Number of Guests"
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#9ACCC9]"
                            required
                        />
                    </div>

                    {/* Select Event */}
                    <div className="mb-6">
                        <label htmlFor="event" className="block text-gray-700 font-semibold mb-2">
                            Select Event:
                        </label>
                        <select
                            id="event"
                            name="event"
                            value={formData.event}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-[#9ACCC9]"
                            required
                        >
                            <option value="entertainment">Entertainment</option>
                            <option value="dining">Dining</option>
                            <option value="decor">Decor</option>
                            <option value="swag_and_gifting">Swag and Gifting</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-8 bg-[#9ACCC9] text-white font-semibold py-3 rounded-lg hover:bg-[#8BB8B6] transition duration-300"
                    >
                        Submit Reservation
                    </button>
                </div>
            </form>
        </div>
    );
};

export default WeddingReservation;
