
// EXPORTS
module.exports = {
    index,
    newForm,
    destroy,
    update,
    create,
    edit,
    show,
    seed
}

// ROUTE CONTROLLERS 

// INDEX
async function index(req, res) {
    let animals = await req.model.Animal.find({})
    res.render("index.ejs", {
        animals: animals.reverse()
    })
}

// NEW
async function newForm(req, res) {
    res.render("new.ejs")
}

// DELETE
async function destroy(req, res) {
    try {
    let deletedAnimal = await req.model.Animal.findByIdAndDelete(req.params.id)
    res.redirect("/animals")
    } catch (error) {
        res.status(500).send("We have a problem, an animal was injured but didn't disappear")
    }
}

// UPDATE
async function update(req, res) {
    try {
        if (req.body.extinct === "on") {
            req.body.extinct = true
        } else {
            req.body.extinct = false
        }
        let updatedAnimal = await req.model.Animal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.redirect(`/animals/${updatedAnimal._id}`)
    } catch (error) {
        res.send("Houston we have a problem")
    }
}

// CREATE
async function create(req, res) {
    try {
        if (req.body.extinct === "on"){
            req.body.extinct = true
        } else {
            req.body.extinct = false
        }
        // res.send(req.body)
        let newAnimal = await req.model.Animal.create(req.body)
        res.redirect("/animals")
    } catch (err) {
        res.send(err)
    }
}

// EDIT 
async function edit(req, res) {
    try {
        let foundAnimal = await req.model.Animal.findById(req.params.id)
        res.render("edit.ejs", {
            animal: foundAnimal
        })
    } catch (error) {
        res.send("Unable to Edit")
    }
}

// SHOW
async function show(req, res) {
    let foundAnimal = await req.model.Animal.findById(req.params.id)
    res.render("show.ejs", {
        animal: foundAnimal
    })
}

// SEED
async function seed(req, res) {
    try {
        await Animal.deleteMany({})
        await Animal.create(
           req.model.seedData
        )
        res.redirect("/animals")
    } catch (error) {
        res.send("The animals were eaten")
    }
}