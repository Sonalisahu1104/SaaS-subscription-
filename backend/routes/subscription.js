const router=require("express").Router();

const db=require("../db");


router.post("/subscribe",
async(req,res)=>{


const {
user_id,
plan_id
}=req.body;


await db.query(

"INSERT INTO subscriptions(user_id,plan_id,status) VALUES($1,$2,$3)",

[user_id,plan_id,"active"]

);


res.json({
message:"Subscription Activated"
});


});



router.get("/:id",
async(req,res)=>{


const data=
await db.query(

`
SELECT plans.name,plans.price,
subscriptions.status
FROM subscriptions
JOIN plans
ON plans.id=subscriptions.plan_id
WHERE user_id=$1

`,
[req.params.id]

);


res.json(data.rows);

});


module.exports=router;