const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
    empid:{type:Number},
    pass:{type:String}
},{collection:"admindata"})

module.exports=mongoose.model("admindata",postSchema);