const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var path = require("path");

// Customer data
var customers = [{
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID: "dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID: "dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID: "dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID: "dummy",
    },
    {
        name: "dummy",
        phone: "dummy",
        email: "dummy",
        uniqueID: "dummy",
    },
];

var waitList = [{
    name: "dummy",
    phone: "dummy",
    email: "dummy",
    uniqueID: "dummy",
}]

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

// Create New Characters - takes in JSON input
app.post("/api/temp", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;

    // Using a RegEx Pattern to remove spaces from newReservation
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReservation);

    if (customers.length > 4) {
        customers.push(newReservation);
        res.json(newReservation);
    } else {
        waitList.push(newReservation);
        res.json(newReservation);
    }


});








app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});