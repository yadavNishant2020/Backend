import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "nsy123",
  post: "5432",
});

db.connect();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {

    const result = await db.query("SELECT country_code from visited_countries");

    const countryData = result.rows.map((element) => {
      return element.country_code;
    });
    console.log(countryData);

    const total = result.rows.length;

    res.render("index.ejs", {countries: countryData, total: total});
    db.end();
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).send("Internal Server Error");
  }

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
