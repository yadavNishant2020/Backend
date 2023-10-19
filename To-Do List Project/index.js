import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req, res)=>{
    const date = new Date();
    res.render("index.ejs",
    {toDay: date}
    );
})

app.post('/',(req, res)=>{
    res.render("index.ejs",
    {taskToAdd: req.body["task"]});
})


app.get('/work',(req, res)=>{
    res.render("index.ejs",
    {}
    );
})


app.listen(port,() =>{
    console.log(`Server is running on ${port}`);
})
