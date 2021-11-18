const express = require('express');
const router = express.Router();
const { post } = require("../models")


router.get("/", async (req, res) => {
    const todoslospost = await post.findAll()
    res.json(todoslospost)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await post.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await post.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:post_id", async (req, res) => {
    const post_id = req.params.post_id;
    await post.destroy({
      where: {
        id: post_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
