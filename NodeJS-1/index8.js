import express from 'express';
const app=express();
app.listen(8080);
const users=[
    {id:1,name:"john",email:"john@gmail.com",role:"student"},
    {id:2,name:"john",email:"john@gmail.com",role:"student"},
    {id:3,name:"john",email:"john@gmail.com",role:"student"},

]
app.use(express.json());  // to parse the json data from the request body
app.get("/",( req, res )=>{
    res.json(users);  

})

app.post("/",(req,res)=>{
    const user = req.body;
    users.push(user);
    res.json(user);
})

// delete user
// app.delete("/:id",(req,res)=>{
//     const id = Number(req.params.id);
//     const index = users.findIndex(u => u.id === id);
//     if(index === -1){
//         return res.status(404).json({message:"User not found"});
//     }
//     users.splice(index,1);
//     res.json({message:"User deleted"});
// })



app.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.json(user);
});