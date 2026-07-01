const router=require("express").Router();
const db=require("../db");


router.get("/",async(req,res)=>{


const data=
await db.query(
"SELECT * FROM plans"
);


res.json(data.rows);

});


module.exports=router;