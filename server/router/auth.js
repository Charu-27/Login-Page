const express=require('express');
const router=express.Router();
require('../database/dbconnection');
const User=require('../database/model/userSchema');
const bodyparser=require('body-parser');
const bcrypt=require('bcryptjs');
router.use(express.json());
const jwt=require('jsonwebtoken');
var token

//router.get('/',(req,res)=>{
  //  res.send('welcome to the server router');
//});

//REGISTRATION MODULE
const {body,validationResult}=require("express-validator")
router.post('/Register',[body("name").isLength({min:3}),body("email").isEmail(),body("phone").isLength(10).isNumeric(),body("password").isLength({min:8}),body("cpassword")],async(req,res)=>{
  {  const errors=validationResult(req);
  const  {name , email, phone, password, cpassword}=req.body;
 
  if(!name||!email||!phone||!password||!cpassword)
  {return res.status(400).json({error:'PLEASE FILL OUT THE REQUIRED FIELD'});} 
   try{
    const userExists=await User.findOne({email:email});
    if(userExists)
    {return res.status(400).json({error:"User already exists"});}
    
    if(password!=cpassword)
    {return res.status(400).json({error:"Passwords and confirm passwords do not match do not match"});}

    const user=new User({name,email,phone,password,cpassword});
    await user.save();
   res.status(201).json({message:"User registered successfully"});}
    
   catch(err)
  {console.log(err);}
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
}
}
});



//LOGIN MODULE
router.post('/Login',async(req,res)=>{

try{
  
  const {email,password}=req.body;

  if(!email||!password)
  {return res.status(400).json({error:"please fill the required field"});}

  const UserLogin=await User.findOne({email:email});
  if(UserLogin){
    const isMatch=await bcrypt.compare(password,UserLogin.password);
    token= await UserLogin.generateAuthToken();
    res.cookie("jwttoken",token,{
    httpOnly:true
   })
   if(!isMatch)
   {return res.status(400).json({error:"Invalid credential different "});}
   else if(isMatch)
  { res.json({message:"User login successfully"});}
}
 else
 { res.status(400).json({error:"Invalid credential "});}

}
catch(err)
{console.log(err);}

})
module.exports=router;
