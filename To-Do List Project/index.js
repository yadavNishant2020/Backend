import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function checkCheckboxStatus() {
  const checkbox = document.getElementById("myCheckbox");

  if (checkbox.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is not checked");
  }
}
app.get("/", (req, res) => {
  res.render("index.ejs");
});

const taskArray = [];

app.post("/", (req, res) => {
  const newTask = req.body.task; //taking input tasks from user
  taskArray.push(newTask);
  res.render("index.ejs", { tasks: taskArray });
});

app.get("/work", (req, res) => {
  res.render("index.ejs", {});
});

const workArray = [];

app.post("/work", (req, res) => {
  const newTask = req.body.task; //taking input tasks from user
  workArray.push(newTask);
  res.render("index.ejs", { tasks: workArray });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
