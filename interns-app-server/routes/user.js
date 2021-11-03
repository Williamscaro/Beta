const express = require('express');
const router = express.Router();
const { user,personal_info } = require("../models")


router.get("/", async (req, res) => {
    const todoslosuser = await user.findAll({
        include: {
            model: personal_info,
            attribute:'firstname'
        }
    })
    res.json(todoslosuser)

});



router.post("/", async (req, res) => {
    const save_user = req.body;
    await user.create(save_user);
    res.json(save_user);

});



module.exports = router;


