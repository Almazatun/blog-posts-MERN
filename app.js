//import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//Create express app
const app = express()

//Config Object to Avoid Deprecation Warnings
const config = {useNewUrlParser: true, useUnifiedTopology: true}

//Set URI
const URI = process.env.MONGODB_URI || "mongodb://localhost/moon"

//Database
mongoose.connect(URI, config);

//Store Connection Object
const db = mongoose.connection;

//CONNECTION EVENTS
db.once('open', () => {
    console.log("Connected to MongoDB database...")
}).on("error", (err) => {
    console.log(err);
})

//Middleware
app.use(bodyParser.json())

//Routes
app.get('/', ((req, res) => {
    res.send('Hello 🧒')
}))

const Quotes = require("./routes/Quotes")

app.use('/quotes', Quotes)

//Starting server
app.listen(3000, () => {
    console.log("Listening on port 3000")
})


