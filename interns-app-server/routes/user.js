const express = require('express');
const router = express.Router();
const { user } = require("../models")


router.get("/", async (req, res) => {
    const todoslosuser = await user.findAll()
    res.json(todoslosuser)

});



router.post("/", async (req, res) => {
    const save_user = req.body;
    await user.create(save_user);
    res.json(save_user);

});



module.exports = router;


