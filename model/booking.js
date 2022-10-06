const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
    hotelName:{type:String},
    email:{type:String},
    phoneNumber:{type:String},
    checkinDate:{type:String},
    checkoutDate:{type:String},
    roomType:{type:String}
})

module.exports=mongoose.model("booking",postSchema);