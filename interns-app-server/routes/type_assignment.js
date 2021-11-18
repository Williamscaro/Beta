const express = require('express');
const router = express.Router();
const { type_assignment } = require("../models")


router.get("/", async (req, res) => {
    const todoslostype_assignment = await type_assignment.findAll()
    res.json(todoslostype_assignment)

});



router.post("/", async (req, res) => {
    const save_type_assignment = req.body;
    await type_assignment.create(save_type_assignment);
    res.json(save_type_assignment);

});



module.exports = router;


