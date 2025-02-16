    // AIzaSyC06-P5LquDMk5HzrziOG3OFZyGnOmwVv0
    const router=require('express').Router();
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const axios =require('axios')
    const genAI = new GoogleGenerativeAI("AIzaSyC06-P5LquDMk5HzrziOG3OFZyGnOmwVv0");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // List of space-related keywords
const spaceKeywords = [
  "space", "universe", "galaxy", "planet", "star", "black hole", "NASA",
  "astronomy", "cosmos", "nebula", "telescope", "astronaut", "orbit",
  "exoplanet", "cosmology", "gravity", "dark matter", "big bang", "lunar",
  "Martian", "Venus", "Jupiter", "Saturn", "Milky Way", "ISS", "rocket"
];

// Function to check if the prompt is space-related
const isSpaceRelated = (prompt) => {
  return spaceKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
};
router.post('/generate',async(req,res)=>{
  try{
    const {prompt} = req.body;
   if (!prompt) {
    return res.status(400).send({success:false, msg:"Prompt is required"});
   }
  if(isSpaceRelated(prompt)){
    const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return res.status(200).send({success:true , data: result })

  }
  else{
    return res.status(400).send({success:false, msg:"Prompt is not space related"});
  }
  
  
  }catch(err){
    res.status(404).send({success:false, msg:err.message});

  }
    
})

module.exports=router;
