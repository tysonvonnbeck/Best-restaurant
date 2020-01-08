const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var path = require("path");

// Customer data
var customers = [
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID:"dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID:"dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID:"dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID:"dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID:"dummy",
    },
];

var waitList = [
    {
    name: "dummy",
    phone: "dummy",
    email: "dummy",
    uniqueID:"dummy",
    }
]

//Routes

//display all customers
app.get("/api/tables", function(req, res) {
    console.log(req.body);
    
    return res.json(customers);
  });
//display all waitlist
  app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/lib/index.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "/lib/reservation.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "/lib/tables.html"));
  });








  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });