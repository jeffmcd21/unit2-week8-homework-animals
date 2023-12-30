
// DEPENDENCIES
require("dotenv").config()
require("./config/db.js")
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")

const app = express()
const { PORT = 501 } = process.env

const Animal = require("./models/Animal.js")

// MIDDLEWARE
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// ROUTRE & ROUTER //

// INDEX
app.get("/animals", async (req, res) => {
    let animals = await Animal.find({})
    res.render("index.ejs", {
        animals: animals.reverse()
    })
})
// NEW
app.get("/animals/new", (req, res) => {
    res.render("new.ejs")
})

// DELETE
app.delete("/animals/:id", async (req, res) => {
    try {
    let deletedAnimal = await Animal.findByIdAndDelete(req.params.id)
    res.redirect("/animals")
    } catch (error) {
        res.status(500).send("We have a problem, an animal was injured but didn't disappear")
    }
})

// UPDATE

// CREATE
app.post("/animals", async (req, res) => {
    try {
        if (req.body.extinct === "on"){
            req.body.extinct = true
        } else {
            req.body.extinct = false
        }
        // res.send(req.body)
        
        let newAnimal = await Animal.create(req.body)
        res.redirect("/animals")
    } catch (err) {
        res.send(err)
    }
})

// EDIT 

// SHOW
app.get("/animals/:id", async (req, res) => {
    let foundAnimal = await Animal.findById(req.params.id)
    res.render("show.ejs", {
        animal: foundAnimal
    })
})

// SERVER LISTENER
app.listen(PORT, () => console.log(`Listening to Powerman ${PORT}`))