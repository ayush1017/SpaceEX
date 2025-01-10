import React from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { Login,Home } from './components'
import { useState,useEffect } from 'react'
import { getAuth } from 'firebase/auth'
import { app } from './config/firebase.config'
import { AnimatePresence } from 'framer-motion'
import { validateUser } from './api'

import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'
import {Dashboard} from './components'
import { Astro, Mars, Spaced,Blogs, Neos, GenAi } from './components/spacecompo'
function App() {
  const firebaseAuth=getAuth(app);
  const navigate=useNavigate();
  const [auth, setauth] = useState(false|| window.localStorage.getItem("auth")==="true")
  const [{user}, dispatch]=useStateValue();
  useEffect(() => {
     firebaseAuth.onAuthStateChanged((userCred)=>{
      if(userCred){
        userCred.getIdToken().then((token)=>{
          validateUser(token).then((data)=>{
            dispatch({
              type:actionType.SET_USER,
              user:data
            })
          })
        })
      }
      else{
        setauth(false);
        window.localStorage.setItem("auth","false");
        dispatch({
          type:actionType.SET_USER,
          user:null
        })
        navigate("/login");
        
      }

     })
  }, [])
  
  return (
    <AnimatePresence mode='wait'>
       <div className='h-full w-full bg-primary flex justify-center items-center'>
        <Routes>
            <Route path='/login' element={<Login setAuth={setauth}/>} />
            <Route path='/*' element={<Dashboard/>}/>
            <Route path='/Astronauts' element={<Astro/>}/>
            <Route path='/Mars' element={<Mars/>}/>
            <Route path='/Space' element={<Spaced/>}/>
            <Route path='/Blogs' element={<Blogs/>}/>
            <Route path='/Neos' element={<Neos/>}/>
            <Route path='/GenAi' element={<GenAi/>}/>
            {/* <Route path='/Dashboard/*' element={<Dashboard/>}/> */}
        </Routes>
    </div>

    </AnimatePresence>
   
  )
}

export default App