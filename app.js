const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const index = require('./index')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})
