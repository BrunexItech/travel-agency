
import React from "react";

const PackagesSection = () => {
  const packages = [
    {
      title: "Cheap Packages",
      destinations: [
        { place: "Shanzu Beach", price: "KES 6,500" },
        { place: "Nyali", price: "KES 7,200" },
        { place: "Bamburi", price: "KES 6,800" },
        { place: "Tiwi Beach", price: "KES 7,500" },
        { place: "Msambweni", price: "KES 7,000" },
        { place: "Gazi Beach", price: "KES 6,700" },
      ],
    },
    {
      title: "Luxury Packages",
      destinations: [
        { place: "Vipingo Ridge", price: "KES 38,000" },
        { place: "Chale Island", price: "KES 42,000" },
        { place: "Funzi Island", price: "KES 36,000" },
        { place: "Manda Bay", price: "KES 40,000" },
        { place: "Msambweni B House", price: "KES 45,000" },
        { place: "Swahili Beach", price: "KES 39,500" },
      ],
    },
    {
      title: "Camping Packages",
      destinations: [
        { place: "Kisite Mpunguti", price: "KES 5,800" },
        { place: "Mida Creek", price: "KES 4,800" },
        { place: "Arabuko Sokoke", price: "KES 4,500" },
        { place: "Tana Delta", price: "KES 5,200" },
        { place: "Sabaki Estuary", price: "KES 4,900" },
        { place: "Kuruwitu Marine", price: "KES 5,000" },
      ],
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">We Provide Affordable Prices</h2>
          <p className="text-gray-600 mt-2">
            Explore Kenya’s beautiful coastal destinations at prices that fit every budget.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-white shadow-md p-6 rounded-md w-full md:w-1/3"
            >
              <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block">
                {pkg.title}
              </h3>
              <ul>
                {pkg.destinations.map((item) => (
                  <li
                    key={item.place}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="text-gray-600">{item.place}</span>
                    <button className="bg-gray-200 px-3 py-1 font-bold border border-gray-300 hover:bg-yellow-400 transition">
                      {item.price}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
