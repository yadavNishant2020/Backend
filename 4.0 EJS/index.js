import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const day = new Date('October 8, 2023 23:15:30');
  const today = day.getDay();
  let type = "";
  let adv = " ";
  if (today === 0 || today === 6) {
   (type = " weekend aa penchod!!!!!!!!!! ",
    (adv = " moj lo!!!!!!! "));
  }else {
    (type = " weekDay "),
    (adv = "it's time to work hard");
  }
  res.render("index.ejs", {
    dayType:type,
    advice:adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
