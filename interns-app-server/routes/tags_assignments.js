const express = require('express');
const router = express.Router();
const { tags_assignments } = require("../models")


router.get("/", async (req, res) => {
    const todoslostags_assignments = await tags_assignments.findAll()
    res.json(todoslostags_assignments)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await tags_assignments.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await tags_assignments.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:tags_assignments_id", async (req, res) => {
    const tags_assignments_id = req.params.tags_assignments_id;
    await tags_assignments.destroy({
      where: {
        id: tags_assignments_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
