"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const PORT = 3003;
const db = require("./models/index");
db.sequelize
    .sync({
    logging: console.log,
    force: false
})
    .then(() => {
    console.log('Connected to DB');
})
    .catch(err => {
    console.log("error: " + err);
})
    .catch(err => {
    console.log("error: " + err);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});
require("./routes/tableRoute")(app);
