import { useState } from "react";

export default function WeddingReservation() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("1");
    const [event, setEvent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", { name, email, date, guests, event });
        // Reset form or show confirmation message
    };

    return (
        <div className="min-h-screen mt-20 bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">

            <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-pink-100 p-4 flex justify-center items-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Wedding Reservation</h2>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-gray-700 font-medium">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-gray-700 font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className="space-y-2">
                        <label htmlFor="date" className="block text-gray-700 font-medium">
                            Date
                        </label>
                        <input
                            id="date"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                    </div>

                    {/* Number of Guests */}
                    <div className="space-y-2">
                        <label htmlFor="guests" className="block text-gray-700 font-medium">
                            Number of Guests
                        </label>
                        <select
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    {/* Event */}
                    <div className="space-y-2">
                        <label htmlFor="event" className="block text-gray-700 font-medium">
                            Event
                        </label>
                        <select
                            id="event"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        >
                            <option value="" disabled>
                                Select an event
                            </option>
                            <option value="ceremony">Ceremony</option>
                            <option value="reception">Reception</option>
                            <option value="both">Both Ceremony and Reception</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
                    >
                        Submit Reservation
                    </button>
                </form>
            </div>
        </div>
    );
}
