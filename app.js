const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!", time: Date() });
});

app.get("/topic/:id", (req, res) => {
  var topics = ["Javascript is ...", "Nodejs is ...", "Express is ..."];
  var output = `
    <a href="/topic/0">Javascript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br>
    ${topics[req.params.id]}
  `;
  res.send(output);
});

app.get("/topic/:id/:mode", (req, res) => {
  res.send(req.params.id + "," + req.params.mode);
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/form_receiver", (req, res) => {
  var title = req.query.title;
  var description = req.query.description;
  res.send(title + "," + description);
});

app.get("/form_post", (req, res) => {
  res.render("form_post");
});

app.post("/form_receiver_post", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.send(title + "," + description);
});

app.listen(3000, () => {
  console.log("Connected 3000 port");
});
