
// DEPENDENCIES

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL)


// STATUS LISTENERS

mongoose.connection.on("error", (err) => console.log(err.message + "Not Working"))
mongoose.connection.on("connected", () => console.log("mingo, mango, mongo connected"))
mongoose.connection.on("disconnected", () => console.log("disconnected"))