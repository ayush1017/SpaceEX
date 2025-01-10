import React, { useState, useEffect } from "react";
import Header from "../Header";
const NeoPagination = () => {
  const nearEarthObjects = {
    "2024-01-01": [
      { id: "12345", neo_reference_id: "67890", name: "Asteroid A", absolute_magnitude_h: 25.5 },
      { id: "54321", neo_reference_id: "98765", name: "Asteroid B", absolute_magnitude_h: 28.3 },
      { id: "11234", neo_reference_id: "22345", name: "Asteroid C", absolute_magnitude_h: 23.7 },
      { id: "67890", neo_reference_id: "12367", name: "Asteroid D", absolute_magnitude_h: 26.1 },
      { id: "98765", neo_reference_id: "54321", name: "Asteroid E", absolute_magnitude_h: 27.2 },
      { id: "54321", neo_reference_id: "11234", name: "Asteroid F", absolute_magnitude_h: 24.9 },
      { id: "65432", neo_reference_id: "76543", name: "Asteroid G", absolute_magnitude_h: 28.0 },
      { id: "12345", neo_reference_id: "23456", name: "Asteroid H", absolute_magnitude_h: 30.1 },
      { id: "34567", neo_reference_id: "45678", name: "Asteroid I", absolute_magnitude_h: 26.5 },
      { id: "78901", neo_reference_id: "89012", name: "Asteroid J", absolute_magnitude_h: 25.0 },
    ],
    "2024-01-02": [
      { id: "34567", neo_reference_id: "23456", name: "Asteroid K", absolute_magnitude_h: 27.5 },
      { id: "45678", neo_reference_id: "12345", name: "Asteroid L", absolute_magnitude_h: 22.4 },
      { id: "56789", neo_reference_id: "23456", name: "Asteroid M", absolute_magnitude_h: 23.1 },
      { id: "67890", neo_reference_id: "56789", name: "Asteroid N", absolute_magnitude_h: 29.0 },
      { id: "78901", neo_reference_id: "67890", name: "Asteroid O", absolute_magnitude_h: 24.8 },
    ],
  };

  const itemsPerPage = 5;

  // Flatten NEO data into a single array for pagination
  const allItems = Object.values(nearEarthObjects).flat();

  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  // Update the displayed items based on the current page
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    setCurrentItems(allItems.slice(startIndex, endIndex));
  }, [currentPage]);

  // Navigate between pages
  const handleNext = () => {
    if (currentPage * itemsPerPage < allItems.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-screen h-h-screen bg-gray-900 text-gray-100 flex flex-col items-center overflow-auto">
        <Header/>
      {/* Top Buttons */}
      {/* <div className="fixed top-4 right-4 flex gap-4">
        <button
          onClick={() => (window.location.href = "/Home")}
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md shadow-md"
        >
          Home
        </button>
        <button
          onClick={() => (window.location.href = "/login")}
          className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-md shadow-md"
        >
          Logout
        </button>
      </div> */}

      {/* Title */}
      <h1 className="text-4xl font-bold mt-10 mb-6 text-center text-white">
        NEOs (Near Earth Objects)
      </h1>

      {/* Container for NEO Items */}
      <div className="w-11/12 max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-gray-700 rounded-lg shadow-md border border-gray-600"
          >
            <h3 className="text-xl font-semibold text-blue-400">NEO ID: {item.id}</h3>
            <h4 className="text-lg text-white">Name: {item.name}</h4>
            <h4 className="text-lg text-white">Reference ID: {item.neo_reference_id}</h4>
            <h4 className="text-lg text-white">Magnitude: {item.absolute_magnitude_h}</h4>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded-md shadow-md ${
            currentPage === 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-400 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage * itemsPerPage >= allItems.length}
          className={`py-2 px-4 rounded-md shadow-md ${
            currentPage * itemsPerPage >= allItems.length
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-400 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NeoPagination;
