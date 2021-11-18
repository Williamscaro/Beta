const express = require('express');
const router = express.Router();
const { documents } = require("../models")


router.get("/", async (req, res) => {
    const todoslosdocuments = await documents.findAll()
    res.json(todoslosdocuments)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await documents.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await documents.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:documents_id", async (req, res) => {
    const documents_id = req.params.documents_id;
    await documents.destroy({
      where: {
        id: documents_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
