const router=require('express').Router();
const admin=require("../config/firebase.config");
const user=require("../models/user")
router.get("/login", async(req,res)=>{
    // return res.json("Login with Google")
    // return res.send(req.headers.authorization)
    if(!req.headers.authorization){
        return res.send.status(500).message("Invalid Token")
    }
    const token=req.headers.authorization.split(" ")[1];
    try{
        const decodeValue=await admin.auth().verifyIdToken(token);
        if(!decodeValue){
            return res.status(505).json({message: "Un Authorized"})
        }else{
            // return res.status(200).json(decodeValue);
            const userExists=await user.findOne({"user_id":decodeValue.user_id});
            if(!userExists){
                // return res.send("Need to create");
                newUserData(decodeValue,req,res);
            }
            else{
                // return res.send("Need to update");
                newUpddateData(decodeValue,req,res);
                
            }
        }    
        


    }catch(error){
        return res.status(505).json("Invalid Token");

    }
})
const newUserData= async(decodeValue,req,res)=>{
    const newUser= new user({
        name: decodeValue.name,
        email: decodeValue.email,
        imageURL: decodeValue.picture,
        user_id: decodeValue.user_id,
        email_verified: decodeValue.email_verified,
        role: "member",
        auth_time: decodeValue.auth_time

    })

    try {
        const savedUser=await newUser.save();
        res.status(200).send({user: savedUser})
    }catch(error){
        res.status(404).send('Internal Server error');
    }

   
    
}

const newUpddateData=async (decodeValue,req,res)=>{
    const filtter={user_id: decodeValue.user_id}

    const options={
        upsert: true,
        new : true
    }
    try{
        const result=await user.findOneAndUpdate(
            filtter,
            {auth_time: decodeValue.auth_time},
            options
        )
        res.status(200).send({user: result});

    }catch(error){
        res.status(404).json('Internal Server Error');


    }
   

}
router.get("/getUsers", async(req,res)=>{
    const cursor=await user.find().sort({createdAt:1})
    if(cursor){
        res.status(200).send({success: true, data: cursor})
    }else{
        res.status(400).send({success: false, msg:"No Data Found"})
    }
})
module.exports=router;