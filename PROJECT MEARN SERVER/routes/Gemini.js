    // AIzaSyC06-P5LquDMk5HzrziOG3OFZyGnOmwVv0
    const router=require('express').Router();
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const axios =require('axios')
    const genAI = new GoogleGenerativeAI("AIzaSyC06-P5LquDMk5HzrziOG3OFZyGnOmwVv0");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
router.post('/generate',async(req,res)=>{
  try{
    const {prompt} = req.body;
    const { GoogleGenerativeAI } = require("@google/generative-ai");

 
  
 
  
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return res.status(200).send({success:true , data: result })
  }catch(err){
    res.status(404).send({success:false, msg:err.message});

  }
    
})

module.exports=router;
