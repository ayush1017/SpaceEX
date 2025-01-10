const mongoose=require('mongoose');
const albumSchema=mongoose.Schema(
    {
        name:{
            type:String,
            require: true,
        },
        imageURL: {
            type: String,
            required: true,

        }
    },
    {timestamps: true}
)
module.exports=mongoose.model("album",albumSchema);