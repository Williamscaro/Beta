const express = require('express');
const router = express.Router();
const { answers } = require("../models")


router.get("/", async (req, res) => {
    const todoslosanswers = await answers.findAll()
    res.json(todoslosanswers)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await answers.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await answers.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:answers_id", async (req, res) => {
    const answers_id = req.params.answers_id;
    await answers.destroy({
      where: {
        id: answers_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
