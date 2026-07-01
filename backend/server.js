const express=require("express");
const cors=require("cors");
const db=require("./db");

const app=express();

app.use(cors());
app.use(express.json());


app.use("/auth",
require("./routes/auth"));

app.use("/plans",
require("./routes/plans"));

app.use("/subscription",
require("./routes/subscription"));

app.get("/",(req,res)=>{
    res.send("SaaS API Running")
});


app.listen(5001,()=>{
console.log("Server running on port 5000");
});
