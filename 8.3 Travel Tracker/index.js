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

    res.render("index.ejs", { countries: countryData, total: total });
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add", async (req, res) => {
  try {
    const countryName = req.body.country;
    const findCountryCode = await db.query('SELECT country_code FROM countries WHERE country_name = $1', [countryName]);

    if (findCountryCode.rows.length === 0) {
      console.error("Country not found in the 'countries' table.");
      res.render("index.ejs", { error: "Country not found in the database." });
      return;
    }

    const countryCode = findCountryCode.rows[0].country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);

    const result = await db.query("SELECT country_code from visited_countries");
    const countryData = result.rows.map((element) => element.country_code);

    const total = result.rows.length;

    res.render("index.ejs", { countries: countryData, total: total });
  } catch (error) {
    console.error("Error retrieving data from the database:", error);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

