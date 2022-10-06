var express=require("express");
var bodyParser=require("body-parser");
var url=require('url');
var fs=require('fs');
const postController=require("./controller/postController");
var http=require('http');
var app=express();
const postRoutes=require("./routes/post")
const mongoose = require('mongoose');
const path=require("path");
const errorHandler=require("./middleware/errorHandler")
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/employeedetails');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(errorHandler)

app.use("/",postRoutes);

// app.get('/',function(req,res){
//     res.redirect("registerpage.html");
// })
// app.get('/registerpage',function(req,res){
//     res.redirect("registerpage.html");
// })
// app.post('/login',function(req,res){
//     var username=req.body.username;
//     var password=req.body.password;


//     db.collection('details').findOne({username:username,password:password},function(err,collection){
//         if(err){
//             throw err;
//         }
//         if(collection==null){
//              return res.status(404).send();
//             }
//         return res.redirect('Welcomepage.html');
//     })
// });

// app.get('/Search',function(req,res){
//     res.redirect('Search.html');
//     var rating=req.body.rating;
//     db.collection('hotelDetails').findOne({rating:rating},function(err,result){
//         if(err) throw err;
//         if(!result){
//             //console.log(result.name);
//             return res.status(404).send();
//         }
//         //console.log(result);
//         return res.status(200).send();
//     });

// })

// app.get('/Bookingpage',function(req,res){
//     res.redirect('Bookingpage.html');
// })

app.set("view engine","hbs");
app.listen(8080,function(err){
    if(err){console.log("Error here");}
    console.log("listening...8080");
});