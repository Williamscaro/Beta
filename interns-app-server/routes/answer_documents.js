const express = require('express');
const router = express.Router();
const { answer_documents } = require("../models")


router.get("/", async (req, res) => {
    const todoslosanswer_documents = await answer_documents.findAll()
    res.json(todoslosanswer_documents)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await answer_documents.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await answer_documents.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:answer_documents_id", async (req, res) => {
    const answer_documents_id = req.params.answer_documents_id;
    await answer_documents.destroy({
      where: {
        id: answer_documents_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
