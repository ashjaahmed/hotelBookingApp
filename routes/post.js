var express = require("express");
var postController=require("../controller/postController");
var router=express.Router();

router.get('/register',function(req,res){
    res.redirect("registerpage.html");
})
router.post('/signup',postController.store);
router.get('/',function(req,res){
    res.redirect("home.html");
})


router.post('/login',postController.validateLogin);
router.get('/search',function(req,res){
    res.redirect("Search.html");
});

router.post("/result",postController.getHotels);


router.get("/Bookingpage",(req,res)=>{
    res.redirect("Bookingpage.html");
})
module.exports=router;

router.post("/booked",postController.confirmBooking);

router.get("/adminpage",(req,res)=>{
    res.redirect("adminpage.html");
})

router.post("/adminlogin",postController.validateAdmin)

router.post("/insert",postController.addHotel);