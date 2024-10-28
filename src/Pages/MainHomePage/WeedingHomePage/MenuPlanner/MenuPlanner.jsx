import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MenuPlanner = () => {
  const instagramData = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Couple Hands",
      Wedding: "Set Menu 01",
      price: "৳ 700.00 Per Person",
      menuItems: [
        "Mutton Katchi Biryani",
        "Chicken Roast",
        "Jali Kebab",
        "Shahi Jorda (with baby sweets)",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },

    {
      id: 2,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Couples",
      Wedding: "Set Menu 02",
      price: "৳ 700.00 Per Person",
      menuItems: [
        "Mutton Katchi Biryani",
        "Chicken Tandoori",
        "Kebab",
        "Shahi Firni",
        "Soft Drinks/Borhani",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 03",
      price: "৳ 800.00 Per Person",
      menuItems: [
        "Mutton Katchi Biryani",
        "Chicken Roast",
        "Mutton Kaleya",
        "Special Naan",
        "Shahi Jorda (with baby sweets)",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 4,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 04",
      price: "৳ 800.00 Per Person",
      menuItems: [
        "Mutton Katchi Biryani",
        "Chicken Tandoori",
        "Beef Kala Bhuna",
        "Special Naan Roti",
        "Shahi Firni",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 5,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 05",
      price: "৳ 650.00 Per Person",
      menuItems: [
        "Plain Polow",
        "Chicken Roast",
        "Mutton Bhuna",
        "Kebab",
        "Shahi Jorda (with baby sweets)",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 6,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 06",
      price: "৳ 650.00 Per Person",
      menuItems: [
        "Peace Polow",
        "Chicken Tandoori",
        "Beef Bhuna",
        "Kebab",
        "Shahi Firni",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 7,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 07",
      price: "৳ 800.00 Per Person",
      menuItems: [
        "Plain Polow",
        "Chicken Roast",
        "Mutton Bhuna",
        "Fish Fry",
        "Shahi Jorda (with baby sweets)",
        "Shahi Borhani/Soft Drinks",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 8,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 08",
      price: "৳ 750.00 Per Person",
      menuItems: [
        "Plain Polow",
        "Chicken Tandoori",
        "Beef Bhuna",
        "Fish Dopeyaja",
        "Shahi Firni",
        "Shahi Borhani/Soft Drinks",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 9,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 09",
      price: "৳ 750.00 Per Person",
      menuItems: [
        "Chicken Biryani",
        "Mutton Bhuna",
        "Kebab",
        "Shahi Jorda (with baby sweets)",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 10,
      imgSrc: "https://i.ibb.co.com/7jk9kHM/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 10",
      price: "৳ 700.00 Per Person",
      menuItems: [
        "Chicken Biryani",
        "Beef Bhuna",
        "Kebab",
        "Shahi Firni",
        "Shahi Borhani/Soft Drinks",
        "Alu Bukhara Chatni",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 11,
      imgSrc: "https://i.ibb.co.com/gDdLTMG/Capture.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 01",
      price: "৳ 18,000.00",
      menuItems: [
        "Whole Mutton Roast with Rice (1pcs)",
        "Whole Chicken Roast (6pcs)",
        "Nargis Kebab (10pcs)",
      ],
    },
    {
      id: 12,
      imgSrc: "https://i.ibb.co.com/S3FD7kb/Capture2.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 02",
      price: "৳ 22,000.00",
      menuItems: [
        "Whole Mutton Roast with Rice (1pcs)",
        "Whole Chicken Roast (4pcs)",
        "Whole Fish Smoked (1pcs)",
        "Nargis kebab (10pcs)",
        "Chicken Shaslik (20pcs)",
      ],
    },
    {
      id: 13,
      imgSrc: "https://i.ibb.co.com/jysDFbS/Capture3.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 03",
      price: "৳ 3,000.00",
      menuItems: ["Whole Chicken Roast (4pcs)", "Nargis kebab (10pc)"],
    },
    {
      id: 14,
      imgSrc: "https://i.ibb.co.com/Bg1c2dv/Capture4.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 04",
      price: "৳ 14,000.00",
      menuItems: [" Whole Mutton Roast With Rice (1pcs)", "Nargis kebab (5pcs)"],
    },
    {
      id: 14,
      imgSrc: "https://i.ibb.co.com/qCHqSBc/Capture5.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 05",
      price: "৳ 5,000.00",
      menuItems: ["Mutton Leg Roast (2pcs)", "Whole Chicken Roast (4pcs)"],
    },
    {
      id: 15,
      imgSrc: "https://i.ibb.co.com/Wx1wrPZ/Capture1.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 01",
      price: "৳ 400.00 Per Person",
      menuItems: [" Beef Tehari", "Jali Kebab", "Salad", "Borhani/Coke", "Mineral Water"],
    },
    {
      id: 16,
      imgSrc: "https://i.ibb.co.com/bX4Krf5/Capture-2-JPG.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 02",
      price: "৳ 600.00 Per Person",
      menuItems: [
        " Plain Polaw",
        "Chicken Roast",
        "Mutton Bhuna",
        "Shahi Borhani/Coke",
        "Shahi Firni",
        "Salad",
        "Mineral Water",
      ],
    },
    {
      id: 17,
      imgSrc: "https://i.ibb.co.com/7VfyBBL/Capture-3-JPG.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 03",
      price: "৳ 550.00 Per Person",
      menuItems: [
        "Chotpoti/Fucka",
        "Reshmi Jilapi",
        "Coffee",
        "Morog Polaw",
        "Jali kebab",
        "Salad",
        "Coke",
        "Mineral Water",
      ],
    },
    {
      id: 18,
      imgSrc: "https://i.ibb.co.com/hKr5p2y/Capture-4-JPG.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 04",
      price: "৳ 650.00 Per Person",
      menuItems: [
        "Chotpoti/Fucka",
        "Reshmi Jilapi",
        "Coffee",
        "Plain Polaw",
        "Chicken Roast",
        "Mutton Bhuna",
        "Shahi Firni",
        "Shahi Borhani/Coke",
        "Salad (Mixed/Piece)",
        "Mineral Water",
      ],
    },
    {
      id: 19,
      imgSrc: "https://i.ibb.co.com/p0PwzWQ/Capture-5-JPG.jpg",
      link: "https://www.instagram.com/bridely",
      alt: "Instagram Image 1",
      Wedding: "Set Menu 05",
      price: "৳ 600.00 Per Person",
      menuItems: [
        "Chotpoti/Fucka",
        "Reshmi Jilapi",
        "Coffee",
        "Mutton Katchi Biryani",
        "Jali Kebab",
        "Shahi Firni",
        "Shahi Borhani/Coke",
        "Salad",
      ],
    },
  ];

  return (
    <div className="mt-[100px] container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Event Menu Planner</h1>
      <Tabs>
        <TabList>
          <Tab>Wedding Menu</Tab>
          <Tab>Bride & Bridegroom</Tab>
          <Tab>Gaye Holud Special</Tab>
          <Tab>Custom Platter</Tab>
        </TabList>

        <TabPanel>
          <div className="bg-blue-100 border border-blue-400 text-blue-800 p-4 rounded-lg shadow-md my-4">
            <h2 className="font-bold text-lg"> Note:</h2>
            <p className="mt-2">
              &quot;Catering&quot; products will be shipped/delivered to any area of Bangladesh if
              you order a minimum of 500 products/quantities from &quot;Catering&quot; categories.
              Orders with less than 500 products/quantities will be shipped only in Dhaka,
              Bangladesh.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white bg-opacity-50 ">
            <div className="flex flex-wrap justify-center gap-4 ">
              {instagramData
                .slice(0, 10)
                .map(({ id, imgSrc, link, alt, Wedding, price, menuItems }) => (
                  <div key={id} className="relative flex flex-col items-center group mb-[50px]">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="255"
                      height="255"
                      src={imgSrc}
                      alt={alt}
                      className="w-64 h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                    />

                    <div className="py-[20px]">
                      <h1 className="text-[20px] font-medium">{Wedding}</h1>
                      <p className="text-[15px] font-medium">{price}</p>
                    </div>
                    <a
                      className="absolute  flex flex-col h-auto bg-white text-black px-4 py-2 rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Array.isArray(menuItems) &&
                        menuItems.map((itm, i) => (
                          <ol key={i}>
                            <li className="underline">{itm}</li>
                          </ol>
                        ))}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col items-center p-6 bg-white bg-opacity-50 ">
            <div className="flex flex-wrap justify-center gap-4 ">
              {instagramData
                .slice(10, 15)
                .map(({ id, imgSrc, link, alt, Wedding, price, menuItems }) => (
                  <div key={id} className="relative flex flex-col items-center group mb-[50px]">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="255"
                      height="255"
                      src={imgSrc}
                      alt={alt}
                      className="w-64 h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                    />

                    <div className="py-[20px]">
                      <h1 className="text-[20px] font-medium">{Wedding}</h1>
                      <p className="text-[15px] font-medium">{price}</p>
                    </div>
                    <a
                      className="absolute  flex flex-col h-auto bg-white text-black px-4 py-2 rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Array.isArray(menuItems) &&
                        menuItems.map((itm, i) => (
                          <ol key={i}>
                            <li className="underline">{itm}</li>
                          </ol>
                        ))}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col items-center p-6 bg-white bg-opacity-50 ">
            <div className="flex flex-wrap justify-center gap-4 ">
              {instagramData
                .slice(15)
                .map(({ id, imgSrc, link, alt, Wedding, price, menuItems }) => (
                  <div key={id} className="relative flex flex-col items-center group mb-[50px]">
                    <img
                      loading="lazy"
                      decoding="async"
                      width="255"
                      height="255"
                      src={imgSrc}
                      alt={alt}
                      className="w-64 h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                    />

                    <div className="py-[20px]">
                      <h1 className="text-[20px] font-medium">{Wedding}</h1>
                      <p className="text-[15px] font-medium">{price}</p>
                    </div>
                    <a
                      className="absolute  flex flex-col h-auto bg-white text-black px-4 py-2 rounded shadow opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Array.isArray(menuItems) &&
                        menuItems.map((itm, i) => (
                          <ol key={i}>
                            <li className="underline">{itm}</li>
                          </ol>
                        ))}
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuPlanner;
