
require("dotenv").config()
require("./config/db.js")
const express = require("express")
const morgan = require("morgan")

const app = express()
const { PORT = 501 } = process.env


// MIDDLEWARE



// ROUTRE & ROUTER

// INDEX

// NEW

// DELETE

// UPDATE

// CREATE

// EDIT 

// SHOW


// SERVER LISTENER
app.listen(PORT, () => console.log(`Listening to Powerman ${PORT}`))