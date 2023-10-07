import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var band_name = " ";

app.use(bodyParser.urlencoded({ extended: true }));

function bandGenerator(req, res, next) {
  console.log(req.body);
  band_name = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>${band_name}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
