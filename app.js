//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

// npm install ejs and,
// write this line when using templates in javaScript
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Server is running on port 3000!");
});

app.get("/", function(req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render('list', {kindOfDay: day, listItems: items});

});

app.post("/", function(req, res) {
  let item = req.body.new_item;

  items.push(item);

  res.redirect("/");
});
