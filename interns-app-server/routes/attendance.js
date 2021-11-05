const express = require('express');
const router = express.Router();
const { attendance } = require("../models")


router.get("/", async (req, res) => {
    const todoslosattendance = await attendance.findAll()
    res.json(todoslosattendance)

});


router.post("/", async (req, res) => {
    const tag = req.body;
    await attendance.create(tag);
    res.json(tag);

});

router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await attendance.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:attendance_id", async (req, res) => {
    const attendance_id = req.params.attendance_id;
    await attendance.destroy({
      where: {
        id: attendance_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });


  
module.exports = router;
