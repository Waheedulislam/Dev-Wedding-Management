import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BudgetInput from "../../../../Components/BudgetInput/BudgetInput";
import FoodCategory from "../../../../Components/FoodCategory/FoodCategory";
import { useState } from "react";
import Sidebar from "../../../../Components/Sidebar/Sidebar";

const MenuPlanner = () => {
  const [budget, setBudget] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleBudgetChange = (value) => {
    setBudget(value);
    setSelectedItems([]);
    setTotalCost(0);
  };

  const handleAddItem = (item) => {
    const alreadySelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

    if (alreadySelected) {
      alert("Already Took This item!");
      return;
    } else {
      const newTotal = totalCost + item.price;
      if (newTotal <= budget) {
        setSelectedItems([...selectedItems, item]);
        setTotalCost(newTotal);
      } else {
        alert("Adding this item will exceed your budget!");
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = selectedItems.filter((item) => item.id !== itemId);
    const removedItem = selectedItems.find((item) => item.id === itemId);
    setTotalCost(totalCost - removedItem.price);
    setSelectedItems(updatedItems);
  };
  const foodData = {
    "Rice Dishes": [
      { id: 1, name: "Mutton Katchi Biryani", price: 250 },
      { id: 2, name: "Chicken Biryani", price: 200 },
      { id: 3, name: "Plain Polow", price: 50 },
      { id: 4, name: "Peace Polow", price: 60 },
      { id: 5, name: "Morog Polaw", price: 180 },
      { id: 6, name: "Whole Mutton Roast with Rice (1 pcs)", price: 1000 },
      { id: 7, name: "Beef Tehari", price: 180 },
    ],
    "Chicken Dishes": [
      { id: 8, name: "Chicken Roast", price: 150 },
      { id: 9, name: "Chicken Tandoori", price: 150 },
      { id: 10, name: "Whole Chicken Roast (4 pcs)", price: 700 },
      { id: 11, name: "Whole Chicken Roast (6 pcs)", price: 1000 },
      { id: 12, name: "Chicken Shaslik (20 pcs)", price: 800 },
    ],
    "Mutton Dishes": [
      { id: 13, name: "Mutton Bhuna", price: 200 },
      { id: 14, name: "Mutton Kaleya", price: 220 },
      { id: 15, name: "Mutton Leg Roast (2 pcs)", price: 300 },
    ],
    "Beef Dishes": [
      { id: 16, name: "Beef Bhuna", price: 180 },
      { id: 17, name: "Beef Kala Bhuna", price: 200 },
    ],
    "Fish Dishes": [
      { id: 18, name: "Fish Fry", price: 150 },
      { id: 19, name: "Fish Dopeyaja", price: 180 },
      { id: 20, name: "Whole Fish Smoked (1 pcs)", price: 500 },
    ],
    "Kebab Varieties": [
      { id: 21, name: "Jali Kebab", price: 100 },
      { id: 22, name: "Kebab", price: 100 },
      { id: 23, name: "Nargis Kebab (10 pcs)", price: 400 },
      { id: 24, name: "Nargis Kebab (5 pcs)", price: 200 },
    ],
    "Bread Varieties": [
      { id: 25, name: "Special Naan", price: 40 },
      { id: 26, name: "Special Naan Roti", price: 50 },
    ],
    "Sweet Dishes": [
      { id: 27, name: "Shahi Jorda (with baby sweets)", price: 50 },
      { id: 28, name: "Shahi Firni", price: 60 },
      { id: 29, name: "Reshmi Jilapi", price: 30 },
    ],
    "Beverages": [
      { id: 30, name: "Shahi Borhani", price: 50 },
      { id: 31, name: "Coke", price: 30 },
      { id: 32, name: "Coffee", price: 40 },
      { id: 33, name: "Mineral Water", price: 10 },
    ],
    "Side Dishes": [
      { id: 34, name: "Alu Bukhara Chatni", price: 20 },
      { id: 35, name: "Salad (Mixed/Piece)", price: 20 },
    ],
    "Appetizer": [{ id: 36, name: "Chotpoti/Fucka", price: 40 }],
  };
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
          <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl text-center text-teal-600 font-bold mb-6">
              Custom Food Platter
            </h1>

            <BudgetInput onBudgetChange={handleBudgetChange} />
            <div className="w-full px-4 md:px-6 lg:px-[50px] max-w-[1420px] mx-auto flex flex-col lg:flex-row justify-between">
              <div className="order-2 lg:order-1 w-full lg:w-[73%] mb-6 lg:mb-[100px]">
                {Object.keys(foodData).map((category) => (
                  <FoodCategory
                    key={category}
                    category={category}
                    items={foodData[category]}
                    onAddItem={handleAddItem}
                  />
                ))}
              </div>
              <div className="order-1 lg:order-2 w-full lg:w-[26%] sticky top-[80px] h-auto lg:h-screen mb-[24px] lg:mb-[0px]">
                <Sidebar
                  selectedItems={selectedItems}
                  totalCost={totalCost}
                  remainingBudget={budget - totalCost}
                  onRemoveItem={handleRemoveItem}
                />
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuPlanner;
