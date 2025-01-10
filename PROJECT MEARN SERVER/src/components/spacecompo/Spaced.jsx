import React, { useState, useEffect } from "react";
// import "./App.css"; // Import the Tailwind styles
import Header from "../Header";
function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const [explanation, setExplanation] = useState("");

  // Fetch NASA APOD data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=HkORylQH8IB2lJQbzIU5fD6SJ3gGIamAtuPP6Q5M"
        );
        const data = await response.json();
        console.log(data);
        setTitle(data.title);
        setDate(data.date);
        setImageUrl(data.hdurl);
        setExplanation(data.explanation);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div className="w-screen h-screen  bg-black text-white overflow-auto">
      {/* Top Buttons */}
      {/* Fixed Header */}
      <div className="w-full">
        <Header />
      </div>

      <div class="flex flex-col items-center justify-center ">
             {/* Content */}
      <h1 className="text-3xl md:text-4xl font-bold text-center my-4">
        {title}
      </h1>
      <h2 className="text-xl md:text-2xl text-blue-300 my-2">{date}</h2>
      <img class='p-4 max-w-sm sm:mx-3'
        src={imageUrl}
        alt={title}
        className="max-w-full md:max-w-2xl my-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <article className="text-lg md:text-xl text-gray-300 px-4 md:px-8 my-4 max-w-screen-md text-justify">
        {explanation}
      </article>
      </div>
      
    </div>
  );
}

export default App;
