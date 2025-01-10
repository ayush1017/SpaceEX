import React, { useState, useEffect } from "react";
import Header from "../Header";
const Astro = () => {
  const images = [
    "https://imgs.search.brave.com/Xt62VMXTj2V8kNbuikUsZBXV6HPkyJk6YDj4dvVNcHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9USXhOemsw/T1RNdFptWXdZaTAw/WmpBNExXRmtaVEl0/Tm1SaU4ySTBaalZt/TXpZNVhrRXlYa0Zx/Y0djQC5qcGc",
    "https://img.etimg.com/photo/msid-103026318,imgsize-67678/RakeshSharma.jpg",
    "https://qph.cf2.quoracdn.net/main-qimg-da332bc32e8e4e26ca89a3b63cffb756",
    "https://cdn.houstonpublicmedia.org/wp-content/uploads/2020/04/10150007/Astronaut-Jim-Lovell-Apollo-13-1000x709.jpg",
    "https://cdn.mos.cms.futurecdn.net/3JuCv4uhvP7gi479VzMcyE.jpg",
    "https://www.rmg.co.uk/sites/default/files/styles/max_width_1440/public/apollo%2011%20crew%20original.jpg?itok=ry1uIsHB",
  ];

  const info = [
    {
      name: "Kalpana Chawla",
      about:
        "Kalpana Chawla: The first woman of Indian origin in space, she was a NASA astronaut who flew on two space missions. Tragically, she lost her life in the Space Shuttle Columbia disaster in 2003.",
    },
    {
      name: "Sqn Ldr Rakesh Sharma",
      about:
        "Sqn Ldr Rakesh Sharma: The first Indian citizen to travel in space. He flew aboard the Soviet spacecraft Soyuz T-11 in 1984.",
    },
    {
      name: "Wing Commander Raveesh Malhotra",
      about:
        "Wing Commander Raveesh Malhotra: An Indian Air Force officer, but not widely known for spaceflight. There might be some confusion or a typo, as this individual is not a widely recognized astronaut.",
    },
    {
      name: "Commander Jim Lovell",
      about:
        "Commander Jim Lovell: An American astronaut famous for his role as the commander of the Apollo 13 mission, which was aborted after an oxygen tank explosion, but his crew's safe return is considered one of the greatest achievements in space history.",
    },
    {
      name: "Commander Eugene Cernan",
      about:
        "Eugene Andrew Cernan was an American astronaut, naval aviator, electrical engineer, aeronautical engineer, and fighter pilot. During the Apollo 17 mission, Cernan became the 11th human being to walk on the Moon.",
    },
    {
      name: "Apollo 11 Crew",
      about:
        "Apollo 11 Crew: Refers to the historic Apollo 11 mission, which was the first to land humans on the Moon. The crew consisted of Neil Armstrong (L): The first human to set foot on the Moon. Michael Collins (Center): The command module pilot who remained in lunar orbit. Buzz Aldrin (R): The second human to walk on the Moon, shortly after Armstrong.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  return (
    <div className="w-screen h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center overflow-hidden relative">
      {/* <div className="fixed top-5 right-5 space-x-2">
        <button
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
          onClick={() => (window.location.href = "/Home")}
        >
          Home
        </button>
        <button
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
          onClick={() => (window.location.href = "/")}
        >
          Logout
        </button>
      </div> */}
      <Header/>
      <div className="relative w-full h-full max-w-full overflow-hidden flex items-center justify-center">
        <img
          src={images[index]}
          alt={info[index].name}
          className="w-full max-w-xl h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent p-4 text-center">
          <h1 className="text-2xl font-bold">{info[index].name}</h1>
          <p className="text-lg max-w-3xl mx-auto mt-2 text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">{info[index].about}</p>
        </div>
      </div>
    </div>
  );
};

export default Astro;
