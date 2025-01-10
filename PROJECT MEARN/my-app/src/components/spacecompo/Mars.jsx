import React, { useEffect, useState } from 'react';
// import './MarsPage.css'; // Assuming the CSS is in a separate file
import Header from '../Header';
const Mars = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Mars photos from NASA API
  useEffect(() => {
    const fetchMarsPhotos = async () => {
      try {
        const response = await fetch(
          'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=HkORylQH8IB2lJQbzIU5fD6SJ3gGIamAtuPP6Q5M'
        );
        const data = await response.json();
        setPhotos(data.photos); // Set fetched photos in state
        setLoading(false); // Set loading to false after fetching data
      } catch (err) {
        console.error('Error fetching data', err);
        setLoading(false);
      }
    };

    fetchMarsPhotos();
  }, []);

  return (
    <div className="mars-page bg-gray-900 text-white min-h-screen flex flex-col">
       {/* Fixed Header */}
       
        <Header />

      {/* Page initiation/loading screen */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-black  opacity-70">
          <div className="text-white text-xl">Loading Mars Data...</div>
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 ml-4"></div>
        </div>
      )}

      {/* Main content */}
      {!loading && (
        <>
          {/* <div className="top-buttons flex justify-between p-4">
            <button
              id="home-btn"
              onClick={() => (window.location.href = '/Home')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Home
            </button>
            <button
              id="logout-btn"
              onClick={() => (window.location.href = '/')}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div> */}

          <h1 id="mars" className="text-center text-4xl font-bold mt-8 mb-4">Mars</h1>

          <div className="rover-photos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 flex-grow">
            {photos.map((photo, index) => (
              <div key={index} className="rover-photo bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h1 className="text-xl font-semibold">{photo.rover.name}</h1>
                <h2 className="text-lg">{photo.camera.name}</h2>
                <h3 className="text-sm text-gray-400">Launch Date: {photo.rover.launch_date}</h3>
                <h3 className="text-sm text-gray-400">Landing Date: {photo.rover.landing_date}</h3>
                <img
                  src={photo.img_src}
                  alt={`Mars Photo ${index}`}
                  className="mt-4 w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Mars;
