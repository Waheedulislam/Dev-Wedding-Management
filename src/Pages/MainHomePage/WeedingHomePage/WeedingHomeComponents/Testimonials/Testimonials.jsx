
const Testimonials = () => {
    return (
        <div className="mt-20 container mx-auto px-4">
            {/* Testimonials */}
            <h3 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600 italic mb-4">
                            {testimonial.quote}</p>
                        <p className="text-right font-medium">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;


const testimonials = [
    { quote: "They made our wedding stress-free and truly magical! Highly recommend their services.", author: "Emily & James" },
    { quote: "Our engagement party was beyond perfect. Every detail was taken care of!", author: "Sarah & Michael" },
    { quote: "Professional, creative, and attentive. They turned our vision into reality.", author: "The Johnsons" },
];