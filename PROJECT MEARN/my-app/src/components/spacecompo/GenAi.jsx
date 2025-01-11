 import axios from 'axios';
import React from 'react'
// import { useEffect } from 'react';
import { useState} from 'react'
const baseUrl="http://localhost:4000/";
 function GenAi() {
    const [prompt,setprompt]=useState('');
    const [respo,setrespo]=useState();
    const [proc,setproc]=useState(true);
    const handleClick=async (e)=>{
        e.preventDefault();
        try{
            const res=await axios.post(`${baseUrl}api/gemm/generate`,
            {prompt}
        )
       console.log(res.data);
       setrespo(res.data);
       setproc(false);
         
        }catch(err){

        }
        
    }
    // useEffect=(()=>{
    //     setproc(false);
    // },[])
   return (
    <>
    <div className='bg-slate-800 w-screen h-screen overflow-hidden '>
        <div className='flex items-center justify-center flex-col text-zinc-50 font-sans text-4xl animate-pulse duration-100'>
        <h1>Hi! I am Narayana Ai</h1>
        <h1>Ask me About Planets!!</h1>
        </div>
       
    <div className='mt-40 flex items-center justify-center md:grid-cols-3 sm:grid-cols-3'>
        <form>
            <textarea className='rounded-lg py-6 px-40  focus:ring-violet-600'type="text-area" placeholder='Ask Narayan Ai!' onChange={(e)=>{setprompt(e.target.value)}} ></textarea><br></br>
            <br></br>
            <button className='py-2 px-2 bg-gray-200 rounded-lg mx-48  hover:bg-slate-600 hover:text-white'onClick={(e)=>{handleClick(e)}}>Ask Me!</button>
                    
        </form>

     </div> <br></br>
     {!proc &&  (

<div class='p-4 max-w-xl mx-auto bg-gray-600 rounded-xl shadow-lg'>

     
<p className='text-yellow-50 mx-4 '>{respo?.data?.response?.candidates?.[0]?.content?.parts?.[0]?.text}</p>
 

</div>
     )

     }
      

    </div>
     
    </>
    
   )
 }
 
 export default GenAi