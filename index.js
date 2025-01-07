const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.post("/get_data", (req, res) => {
  console.log(req.body);
  res.send("Get Data");
});

app.listen(3000);
