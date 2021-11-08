const express = require('express');
const router = express.Router();
const { assignment_documents } = require("../models")


router.get("/", async (req, res) => {
    const todoslosassignment_documents = await assignment_documents.findAll()
    res.json(todoslosassignment_documents)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await assignment_documents.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await assignment_documents.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:assignment_documents_id", async (req, res) => {
    const assignment_documents_id = req.params.assignment_documents_id;
    await assignment_documents.destroy({
      where: {
        id: assignment_documents_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
