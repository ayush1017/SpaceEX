const express=require("express");
const app=express();

const cors=require("cors");
const {default: mongoose}=require("mongoose");
app.use(cors({origin:true}));
app.use(express.json())
app.get('/',(req,res)=>{
    return res.json("Hai There")

})

//User authentication  routes

const userRoute=require("./routes/auth");
app.use("/api/users/", userRoute);

const artistsRoutes=require("./routes/artist")
app.use("/api/artists/",artistsRoutes)

const albumRoutes=require("./routes/album")
app.use("/api/albums",albumRoutes)

const songRoutes=require("./routes/song")
app.use("api/songs/",songRoutes)
const gem=require("./routes/Gemini")
app.use("/api/gemm/",gem);
mongoose.connect("mongodb+srv://axel1:axel1@cluster0.s7px7no.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser : true});
mongoose.connection
.once("open",()=>console.log("Connected"))
.on("error",(err)=>{
    console.log(`Error: ${(err)}`)
})

app.listen(4000,()=>{
    console.log("Listening to port 4000"); 
})