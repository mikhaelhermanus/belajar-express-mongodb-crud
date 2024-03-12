module.exports = app => {
    const mahasiswa = require("../controllers/mahasiswa.controllers")
    const router = require("express").Router();

    router.get("/", mahasiswa.findAll)
    router.get("/:id", mahasiswa.findById)
    router.post("/", mahasiswa.create)
    router.put("/:id", mahasiswa.update)
    router.delete("/:id", mahasiswa.delete)

    app.use('/mahasiswa', router)
}