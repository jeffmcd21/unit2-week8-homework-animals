
// DEPENDENCIES
const express = require("express")
const router = express.Router()
const animalController = require("../controllers/animals.js")

// ROUTES
router.get("/", animalController.index)
router.get("/new", animalController.newForm)
router.delete("/:id", animalController.destroy)
router.put("/:id", animalController.update)
router.post("/", animalController.create)
router.get("/edit/:id", animalController.edit)
router.get("/:id", animalController.show)
router.get("/seed", animalController.seed)

// EXPORT
module.exports = router