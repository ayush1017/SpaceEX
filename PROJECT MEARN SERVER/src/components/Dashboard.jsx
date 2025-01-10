import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';

const Dashboard = () => {
  const [data,setdata]=useState();
  const [load,setload]=useState(true);
  const [count,setcount]=useState(0);
  const one=()=>{
    setcount(1);
    setload(true);
  }
  useEffect(()=>{
    const messageShown = localStorage.getItem('messageShown');
    
    if (!messageShown) {
      // Set the message and store flag to localStorage
      setdata('Use The New Narayan_Ai To Ask About Space');
      setload(false);
      localStorage.setItem('messageShown', 'true');
    }
   
   
    
    
  },[])
  return (
    <div className="w-full h-full  bg-gradient-to-b from-gray-900 to-black text-gray-200 sm:w-screen sm:h-screen md:w-screen md:h-screen overflow-hidden">
       
      {/* Fixed Header */}
      <div className="w-full">
        <Header />
      </div>
      <div class="flex flex-col gap-3"></div>
      {!load &&(
         <div class='absolute z-40 inset-0 flex items-center justify-center  bg-black opacity-70 '>
          <div class='bg-slate-600 p-4 max-w-sm mx-auto rounded-xl text-white text-xl'>
          {data}<br></br>
          
          <button class="absolute top-0 right-0 h-16 w-16 ... p-4 bg-red-600 rounded-full" onClick={()=>{one()}}>X</button>
          
        
         </div>
        
        </div>
      )

      }
      
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/starfield.png')] opacity-50 pointer-events-none"></div>

      {/* Card Container */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5 w-full max-w-screen-xl mt-16 mx-auto">
        {/* Card 1 */}
        <NavLink to={'/Space'}>
          <div className="bg-black bg-opacity-70 rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer">
            <h2 className="text-orange-400 text-lg md:text-xl font-bold mb-3">Space Of The Day</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Space is the final frontier where we seek to understand the universe beyond our world.
            </p>
          </div>
        </NavLink>

        {/* Card 2 */}
        <NavLink to={'/Mars'}>
          <div className="bg-black bg-opacity-70 rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer">
            <h2 className="text-orange-400 text-lg sm:text-xl font-bold mb-3">Journey to Mars</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Our mission to Mars will help us learn about the possibility of life on other planets.
            </p>
          </div>
        </NavLink>

        {/* Card 3 */}
        <NavLink to={'/Neos'}>
          <div className="bg-black bg-opacity-70 rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer">
            <h2 className="text-orange-400 text-lg md:text-xl font-bold mb-3">Discover NEOs</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Near-Earth Objects are asteroids and comets that come close to our planet, and studying them is vital.
            </p>
          </div>
        </NavLink>

        {/* Card 4 */}
        <NavLink to={'/Astronauts'}>
          <div className="bg-black bg-opacity-70 rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer">
            <h2 className="text-orange-400 text-lg md:text-xl font-bold mb-3">Unsung Astronauts</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Explore to get to know our unsung Astronauts who left no stone unturned and braved space with glory.
            </p>
          </div>
        </NavLink>

        {/* Card 5 */}
        <NavLink to="https://www.youtube.com/watch?v=xRPjKQtRXR8">
        <div className="bg-black bg-opacity-70 rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer">
          <h2 className="text-orange-400 text-lg md:text-xl font-bold mb-3">Space Live</h2>
          <p className="text-gray-400 text-sm md:text-base">
            Catch the live stream of space exploration.
          </p>
        </div>

        </NavLink>
       

        {/* Card 6 */}
        <NavLink to={'/Blogs'}>
          <div className="bg-black bg-opacity-70 rounded-lg p-5 shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer">
            <h2 className="text-orange-400 text-lg md:text-xl font-bold mb-3">Space Blogs</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Write your space facts and enlighten others.
            </p>
          </div>
        </NavLink>


      </div>
    </div>
  );
};

export default Dashboard;
