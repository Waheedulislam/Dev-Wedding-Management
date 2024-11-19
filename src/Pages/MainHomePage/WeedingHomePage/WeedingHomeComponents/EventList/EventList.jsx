import { Heart, Calendar, Glasses, PartyPopper, Cake, Building2 } from 'lucide-react';







export default function EventList() {
  return (
    <div className=' bg-gray-50'>
      <section className="py-16  container mx-auto px-4 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl my-8 font-bold text-center mb-4">Celebrate Every Moment with Us</h2>
          <p className="text-xl my-12 text-center text-gray-600 mb-12">
            We specialize in creating unforgettable experiences for all types of occasions. Whether you're planning a grand wedding,
            a cozy engagement, or a festive reception, we ensure every detail is perfect.
          </p>

          {/* Event Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {eventCategories.map((category, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-2xl  rounded-lg p-6 flex flex-col">
                <div className="w-12  text-teal-700 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg  font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-gray-500">{category.services}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const eventCategories = [
  {
    title: "Weddings",
    description: "From dreamy decor to seamless coordination, we turn your big day into a magical celebration.",
    services: "Venue selection, decoration, catering, entertainment, and more.",
    icon: <Heart className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Engagements",
    description: "Celebrate the start of your journey with a beautifully planned engagement party.",
    services: "Customized themes and intimate arrangements for every love story.",
    icon: <Glasses className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Receptions",
    description: "End your wedding celebrations with a grand and memorable reception.",
    services: "Elegant setups, curated menus, and perfect ambiance.",
    icon: <PartyPopper className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Anniversaries",
    description: "Honor your milestones with a celebration that reflects your journey.",
    services: "Personalized themes, surprise elements, and memorable experiences.",
    icon: <Cake className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Pre-Wedding Events",
    description: "Host memorable mehndi, sangeet, or bridal showers with our creative touch.",
    services: "Cultural integration, entertainment planning, and guest management.",
    icon: <Calendar className="w-6 h-6 text-primary-foreground" />
  },
  {
    title: "Corporate and Social Events",
    description: "Celebrate professional milestones or host memorable private parties with us.",
    services: "Venue selection, theme execution, catering, and logistics management.",
    icon: <Building2 className="w-6 h-6 text-primary-foreground" />
  }
];
