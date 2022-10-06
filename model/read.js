const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const postSchema=new Schema({
    hotelName:{type:String},
    hotelLocation:{type:String},
    phone:{type:Number},
    rating:{type:Number}
},{collection:"hotelDetails"});

module.exports=mongoose.model("hotelDetails",postSchema);

