import { Calendar, Users, Sparkles, Trophy } from 'lucide-react';
import BannerSection from '../../Components/Shared/BannerSection/BannerSection';

export default function About() {
    const description =
        "Crafting Unforgettable Experiences Since 2010";
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <BannerSection
                bannerSectionTitle="About EventMasters"
                bannerSectionDescription={description}
            />

            {/* Mission Statement */}
            <section className="py-32 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6">Our Mission</h2>
                    <p className="text-xl text-gray-700">
                        At EventMasters, we believe in the power of exceptional events to inspire, connect, and transform. Our mission is to turn your vision into reality, creating seamless and unforgettable experiences that leave a lasting impact.
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4 ">
                                    <h3 className="text-2xl font-semibold mb-3">{member.name}</h3>
                                    <p className="text-gray-600 font-bold my-2">{member.role}</p>
                                    <p className="text-lg  text-gray-700">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose EventMasters</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="text-center">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mb-4 mx-auto">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const teamMembers = [
    {
        name: 'Sarah Johnson',
        role: 'Founder & CEO',
        bio: 'With over 15 years of experience, Sarah leads our team with passion and innovation.',
        image: 'https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
    },
    {
        name: 'Michael Chen',
        role: 'Creative Director',
        bio: "Michael's creative vision brings unique flair to every event we produce.",
        image: 'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3V5fGVufDB8fDB8fHww',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Client Relations Manager',
        bio: 'Emily ensures our clients receive top-notch service from start to finish.',
        image: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3V5fGVufDB8fDB8fHww',
    },
];

const features = [
    {
        title: 'Expert Planning',
        description: 'Our seasoned team brings years of experience to every event.',
        icon: <Calendar className="w-6 h-6 text-gray-700" />,
    },
    {
        title: 'Tailored Experiences',
        description: 'We craft each event to perfectly match your vision and goals.',
        icon: <Users className="w-6 h-6 text-gray-700" />,
    },
    {
        title: 'Cutting-edge Technology',
        description: 'We leverage the latest tech to enhance your event experience.',
        icon: <Sparkles className="w-6 h-6 text-gray-700" />,
    },
    {
        title: 'Award-winning Service',
        description: 'Recognized in the industry for our exceptional service standards.',
        icon: <Trophy className="w-6 h-6 text-gray-700" />,
    },
];
