const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PostSchema=new Schema({
  name:{type:String},
  username:{type:String},
  password:{type:String},
  email:{type:String},
  phone:{type:Number,require:true}
});

module.exports=mongoose.model("Users",PostSchema);