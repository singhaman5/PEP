// Router
import express from "express";
const app = express();

const userrouter = express.Router();
const productrouter = express.Router();
app.listen(8080, () => {
    console.log("Server started");
});
// routes
userrouter.get("/", (req, res) => {
    res.send("This is get request of user router");
});
userrouter.post("/", (req, res) => {
    res.send("This is post request of user router");
});
productrouter.get("/", (req, res) => {
    res.send("This is get request of product router");
});
productrouter.post("/", (req, res) => {
    res.send("This is post request of product router");
});
// mount router on app
app.use("/api/users", userrouter);
app.use("/api/users",productrouter)