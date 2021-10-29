const express = require('express');
const router = express.Router();
const { tags } = require("../models")


router.get("/", async (req, res) => {
    const todoslostaga = await tags.findAll()
    res.json(todoslostaga)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await tags.create(tag);
    res.json(tag);

});









module.exports = router;