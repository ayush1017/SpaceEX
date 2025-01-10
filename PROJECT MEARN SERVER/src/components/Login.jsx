import React from 'react'
import { app } from '../config/firebase.config';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc'
import { useEffect } from 'react';
import { useStateValue } from '../context/StateProvider';
import { validateUser } from '../api';
import { actionType } from '../context/reducer';
function Login({setAuth}) {
  const firebaseAuth=getAuth(app);
  const provider=new GoogleAuthProvider();
  const navigate=useNavigate();
  const [{user},dispatch]=useStateValue();
  const loginWithGoogle=async ()=>{
    await signInWithPopup(firebaseAuth,provider).then((userCred)=>{
      if(userCred){
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        firebaseAuth.onAuthStateChanged((userCred)=>{
          if(userCred){
           
            userCred.getIdToken().then((token)=>{
              validateUser(token).then((data)=>{
                  dispatch(
                    {
                      type:actionType.SET_USER,
                      user:data
                    }

                  )
              })
            })
            navigate("/",{replace: true})
          }
          else{
            setAuth(false);
            // window.localStorage.setItem("auth","false");
            dispatch({
              type:actionType.SET_USER,
              user: null
            })
            navigate("/login");
            
          }
    
         })
        
      }
      

    })
       
  }
  useEffect(()=>{
    if(window.localStorage.getItem("auth")=="true"){
      navigate("/",{replace: true})
    }

  },[])
  return (
    <div className='relative w-screen h-screen '>
      <video src='./Planet.mp4'
      autoPlay
      muted
      loop
      className='w-full h-full object-cover'

      />
      
     <div className='absolute inset-0  flex items-center justify-center p-4'>
      <div class='animate-bounce animation-duration-[1s] animation-iteration-count-1'>
      <h1 class='text-white text-2xl'>Welcome to the World Of Space Please Login </h1>
      </div>
     

     
        <div className='w-full md:w-375 lg:w-768 sm:m-48 p-4 bg-lightOverlay shadow-2xl  flex-col items-center justify-center'>
          
            <div className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:bg-card hover:shadow-md duration-100 ease-in-out transition-all'
             onClick={loginWithGoogle}>
            <FcGoogle className='text-xl'/>
           Sign in with Google

            </div>
           
        </div>
     </div>
    </div>
  )
}

export default Login