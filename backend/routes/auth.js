const router=require("express").Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const db=require("../db");


router.post("/register",async(req,res)=>{

const {name,email,password}=req.body;


const hash=await bcrypt.hash(password,10);


await db.query(
"INSERT INTO users(name,email,password) VALUES($1,$2,$3)",
[name,email,hash]
);


res.json({
message:"User Registered"
});

});




router.post("/login",async(req,res)=>{


const {email,password}=req.body;


const result=
await db.query(
"SELECT * FROM users WHERE email=$1",
[email]
);


if(result.rows.length==0)
return res.json("User not found");


const user=result.rows[0];


const match=
await bcrypt.compare(password,user.password);


if(!match)
return res.json("Wrong Password");


const token=
jwt.sign(
{id:user.id},
"secret"
);


res.json({
token,
user
});


});


module.exports=router;