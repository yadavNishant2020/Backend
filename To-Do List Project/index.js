import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    const date = new Date();
    res.render("index.ejs",
    {toDay: date}
    );
})

app.get('/work',(req, res)=>{
    res.render("index.ejs",
    {}
    );
})


app.listen(port,() =>{
    console.log(`Server is running on ${port}`);
})
