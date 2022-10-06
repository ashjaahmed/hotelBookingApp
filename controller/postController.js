const Post=require("../model/post")
const path=require("path");
const hotels=require("../model/read")
const Book=require("../model/booking");
const Read=require("../model/read");
const Admin=require("../model/admin");
const { db, findOne } = require("../model/post");
exports.store=async(req,res,next)=>{
    try{
        let post= new Post();
        post.name=req.body.name;
         post.username=req.body.username;
         post.password=req.body.password;
         post.email=req.body.email;
         post.phone=req.body.phone;
         post =await post.save();
         res.send(post);
    }
    catch(err){
        next(err);
    }            
}
exports.validateLogin= async(req,res,next)=>{
    try{
        let username=req.body.username;
        let password=req.body.password;
        const doc=await Post.findOne({username:username,password:password});
        if(doc==null){
            console.log("Invalid login password");
            res.status(404).send();
        }
        res.redirect("Welcomepage.html");
    }catch(err){
        next(err);
    }
}

exports.getHotels=async(req,res,next)=>{
    try{
        let rating=req.body.rating;
        console.log(`the rating is ${rating}`);
        const doc=await hotels.find({rating:rating});
        // const info=()=>{
        //     return hotels;
        // }
        res.render("list",{data:doc});
    }catch(err){
        next(err);
    }
}

exports.confirmBooking=async(req,res,next)=>{
    try{
        let book= new Book();
        book.hotelName=req.body.hotelName;
        book.email=req.body.email;
        book.phoneNumber=req.body.phoneNumber;
        book.checkinDate=req.body.checkinDate;
        book.checkoutDate=req.body.checkoutDate;
        book.roomType=req.body.roomType;
        book=await book.save();
        res.send("Booking Done Succesfully");

    }catch(err){
        next(err);
    }
}
exports.validateAdmin=async(req,res,next)=>{
    try{
        let empid=req.body.empid;
        let pass=req.body.pass;
        console.log(empid);
        console.log(pass);
        const doc=await Admin.findOne({empid:empid,pass:pass});
        console.log(doc);
        if(doc==null){
            console.log("Invalide username pass");
            res.status(404).send();
        }
        else{
            res.redirect("addhotel.html");
            
        }
    }catch(err){
        next(err);
    }
}

exports.addHotel=async(req,res,next)=>{
    try{
    let read=new Read();
    read.hotelName=req.body.hotelName;
    read.hotelLocation=req.body.hotelLocation;
    read.phone=req.body.phone;
    read.rating=req.body.rating;
    read= await read.save();
    res.send("Hotel Added Successfully");
    }catch(err){
        next(err);
    }

}