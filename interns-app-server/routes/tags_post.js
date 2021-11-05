const express = require('express');
const router = express.Router();
const { tags_post } = require("../models")


router.get("/", async (req, res) => {
    const todoslostags_post = await tags_post.findAll()
    res.json(todoslostags_post)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await tags_post.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await tags_post.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:tags_post_id", async (req, res) => {
    const tags_post_id = req.params.tags_post_id;
    await tags_post.destroy({
      where: {
        id: tags_post_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
