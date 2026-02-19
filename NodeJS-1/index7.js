import express from "express"
const app=express()
app.listen(8080)
app.get("/",(req,res)=>{
    const user={
        name:"Aman",
        email:"aman@gmail.com",
        role:"student"
    };
    //res.send(user);
    res.json(user)
})
