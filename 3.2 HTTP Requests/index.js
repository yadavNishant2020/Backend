import express from "express"
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", (req, res) =>{
res.send("+91 XX XXXX XXXX");
})

app.get("/about", (req, res) =>{
    res.send("NISSSSSHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!")
})
app.listen(port, () => {
console.log(`server in running on ${port}`);
})