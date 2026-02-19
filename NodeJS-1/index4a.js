import express from "express"
const app= express();
app.listen(8070,()=>{
    console.log("Server Started");
});
app.get("/:id/:id1/:id2/:id3", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    res.send("hello students");
});

app.get("/:id/:id1", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    const id = Number(req.params.id);
    const id1 = Number(req.params.id1);
    const sum = id + id1;
    res.send(`Sum is: ${sum}`);
});


app.get("/x/y", (req, res) => {
    res.send("Good morning");
});




x/4/y/5/z/4
import express from "express"
const app= express();
app.listen(8070,()=>{
    console.log("Server Started");
});
app.get("/x/:id/y/:id1/z/:id2", (req, res) => {
    console.log(req.url);
    console.log(req.params);
    const id = Number(req.params.id);
    const id1 = Number(req.params.id1);
    const id2 = Number(req.params.id2);
    const sum = id + id1 + id2;
    res.send(`Sum is: ${sum}`);
});
