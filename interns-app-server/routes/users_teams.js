const express = require('express');
const router = express.Router();
const { users_teams } = require("../models")


router.get("/", async (req, res) => {
    const todoslosusers_teams = await users_teams.findAll()
    res.json(todoslosusers_teams)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await users_teams.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await users_teams.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:users_teams_id", async (req, res) => {
    const users_teams_id = req.params.users_teams_id;
    await users_teams.destroy({
      where: {
        id: users_teams_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
