
// DEPENDENCIES
require("dotenv").config()
require("./config/db.js")
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const animalRouter = require("./routes/animals.js")

const app = express()
const { PORT = 501 } = process.env
const seedData = require("./models/seed")

const Animal = require("./models/Animal.js")

// MIDDLEWARE
app.use((req, res, next) => {
    req.model = {
        Animal,
        seedData
    }
    console.log("middleware")
    next()
})
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// ROUTRE & ROUTER //
app.use("/animals", animalRouter)

// SERVER LISTENER
app.listen(PORT, () => console.log(`Listening to Powerman ${PORT}`))