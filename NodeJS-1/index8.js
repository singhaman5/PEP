import express from 'express';
const app=express();
app.listen(8080, () => {
    console.log("Server Started......");
});

const greet = (req,res,next) => {
    console.log("Hello World")
    next()
};
app.use(greet)

const users=[
    {id:1,name:"john",email:"john@gmail.com",role:"student"},
    {id:2,name:"cathy",email:"cathy@gmail.com",role:"developer"},
    {id:3,name:"aman",email:"aman@gmail.com",role:"client"},

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

app.delete("/:id", (reuuest, response,) => {
    users = users.filter((user) => user.id != Number(req.params.id))
    res.json(users)
})



app.get("/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.json(user);
});