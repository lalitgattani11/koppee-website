import React from "react";

function Menu() {
  const hotCoffees = [
    {
      name: "Black Coffee",
      desc: "Pure and bold, black coffee delivers a strong, rich flavor without any additives.",
      price: "$5",
      image: "/images/menu-1.jpg",
    },
    {
      name: "Chocolate Coffee",
      desc: " A delightful blend of coffee and cocoa for a smooth, chocolaty kick.",
      price: "$7",
      image: "/images/menu-2.jpg",
    },
    {
      name: "Coffee With Milk",
      desc: "A creamy and comforting mix of coffee mellowed with fresh milk.",
      price: "$9",
      image: "/images/menu-3.jpg",
    },
  ];

  const coldCoffees = [
    {
      name: "Iced Americano",
      desc: "A bold espresso-based drink served chilled over ice for a strong, refreshing kick.",
      price: "$6",
      image: "/images/menu-4.avif",
    },
    {
      name: "Mocha Frappe",
      desc: "A sweet, chocolate-infused iced coffee blended with milk and topped with cream.",
      price: "$8",
      image: "/images/menu-5.avif",
    },
    {
      name: "Vanilla Cold Brew",
      desc: "Smooth cold brew coffee mellowed with vanilla syrup and a touch of milk.",
      price: "$10",
      image: "/images/menu-6.avif",
    },
  ];

  return (
    <div id="menu" className="bg-[#FFFBF2] w-full py-16 px-4 sm:px-8 md:px-16">
      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center">
        <svg
          className="h-24 w-[2px] text-yellow-300"
          viewBox="0 0 2 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <p className="text-yellow-300 font-semibold font-sans text-3xl sm:text-4xl mb-3">
          Menu & Pricing
        </p>
      </div>
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
        Competitive Pricing
      </h2>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 py-12 px-4 text-center md:text-left items-center">
        {/* Hot Coffee Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-8">Hot Coffee</h2>
          {hotCoffees.map((coffee, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start mb-10 text-center sm:text-left">
              {/* Image with Price */}
              <div className="relative w-24 h-24 min-w-[6rem] mr-0 sm:mr-6 mb-4 sm:mb-0">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#C87E4F] text-white text-sm rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                  {coffee.price}
                </div>
              </div>
              {/* Text Info */}
              <div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]">
                  {coffee.name}
                </h3>
                <p className="text-[#4B4B4B] text-sm mt-1 leading-snug max-w-xs mx-auto sm:mx-0">
                  {coffee.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cold Coffee Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-8">Cold Coffee</h2>
          {coldCoffees.map((coffee, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start mb-10 text-center sm:text-left">
              {/* Image with Price */}
              <div className="relative w-24 h-24 min-w-[6rem] mr-0 sm:mr-6 mb-4 sm:mb-0">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#C87E4F] text-white text-sm rounded-full flex items-center justify-center font-semibold shadow-md z-10">
                  {coffee.price}
                </div>
              </div>
              {/* Text Info */}
              <div>
                <h3 className="text-xl font-semibold text-[#2D2D2D]">
                  {coffee.name}
                </h3>
                <p className="text-[#4B4B4B] text-sm mt-1 leading-snug max-w-xs mx-auto sm:mx-0">
                  {coffee.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
