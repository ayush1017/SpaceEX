import React from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { isActivestyle, isnotActivestyle } from '../utils/Style'
import { isActive } from 'react-router-dom'
import { FaCrown } from 'react-icons/fa'
import { useStateValue } from '../context/StateProvider'
import { getAuth } from 'firebase/auth'
import { app } from '../config/firebase.config'
import {motion} from 'framer-motion'
import { useState } from 'react'
function Header() {

    const [{ user }, dispatch] = useStateValue();
    const [isMenu,setisMenu]=useState(false);
    const logout = () => {
        const firebase = getAuth(app);
        firebase.signOut().then(() => {
            window.localStorage.setItem("auth", "false");
            Navigate('/login', { replace: true })
        }).catch((e) => {
            console.log(e);

        });
       
        

    }
    return (
        <header className='flex items-center w-full p-4 md:py-2 md:px-6 text-white'>
            <NavLink to={'/'}> 
                <img src='./Aveng.png' alt="asjkfnq" className='w-16'></img>

            </NavLink>
            <ul className='flex items-center justify-center ml-7'>
                <li className='mx-5 text-lg'>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? isActivestyle : isnotActivestyle}>
                        Home

                    </NavLink>


                </li>
                <li className='mx-5 text-lg'>
                    <NavLink to={'/GenAi'} className={({ isActive }) => isActive ? isActivestyle : isnotActivestyle}>
                        NarayanAI

                    </NavLink>


                </li>
                {/* <li className='mx-5 text-lg'>
                    <NavLink to={'/Premium'} className={({ isActive }) => isActive ? isActivestyle : isnotActivestyle}>
                        Premium

                    </NavLink>


                </li>
                <li className='mx-5 text-lg'>
                    <NavLink to={'/Contact'} className={({ isActive }) => isActive ? isActivestyle : isnotActivestyle}>
                        Contact

                    </NavLink>


                </li> */}
            </ul>
            <div 
            onMouseEnter={()=>{setisMenu(true)}} 
            onMouseLeave={()=>{setisMenu(false)}}
            className='flex items-center ml-auto cursor-pointer gap-2 relative'>
                <img src={user?.user?.imageURL} className='w-12 min-w-[44px]  object-cover rounded-full  shadow-lg' referrerPolicy='no-referrer'></img>
                <div className='flex flex-col'>
                    <p className='text-textColor text-lg hover:text-headingColor duration-75 transition-all ease-in-out'>{user?.user?.name}</p>
                    <p className='flex  items-center gap-2 text-xs text-gray-500 font-normal'>Premium Member.<FaCrown className='text-sm -ml-1 text-yellow-500' /></p>

                </div>
                {isMenu && (
                    <motion.div
                    initial={{opacity:0, y:50}}
                    animate={{opacity:1, y:0}}
                    exit= {{opacity: 0, y:50}}
                    className='absolute z-10 p-4 top-12 right-0 w-275 gap-4 bg-card shadow-lg  rounded-lg backdrop-blur-sm flex flex-col'>
                       {/* <NavLink to={'/userProfile'}>
                           <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>Profile</p>
   
                       </NavLink> */}
                       {/* <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>MyFavourite</p> */}
                       <p onClick={logout} className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>LogOut</p>
                       {/* { user?.user?.role==="admin" && (
                        <NavLink to={'/Dashboard/Home'}>
                        <p className='text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out'>Dashboard</p>
 
                        </NavLink>

                       )

                       } */}
                       
                      
   
                   </motion.div>

                )}
                

            </div>

        </header>

    )
}

export default Header