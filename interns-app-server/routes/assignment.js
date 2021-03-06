const express = require('express');
const router = express.Router();
const { assignment,type_assignment,status_assignment,priority_assignment,teams,user } = require("../models")


router.get("/views", async (req, res) => {
  const todoslosassignment = await assignment.findAll({

    attributes:['id','Subject','description','start_date','end_date'],
    include:[
      {
        model: status_assignment,
        as: 'status',
        attributes:['desctiption']
      },
     {
        model: type_assignment,
        as: 'type',
        attributes:['description']
      },
      {
        model: priority_assignment,
        as: 'priority',
        attributes:['description']
      },
      {
        model: teams,
        attributes:['name']

      },
      {
        model: user,
        attributes:['username']
    
      },

    ] ,
 
  })
  res.json(todoslosassignment)

});

router.get("/", async (req, res) => {
    const todoslosassignment = await assignment.findAll()
    res.json(todoslosassignment)

});

router.get("/buscar_por_id/:id", async (req, res) => {
    const id = req.params.id;
    const assignment_by_team = await assignment.findAll({where: {id: id}});
    res.json(assignment_by_team);
  });

router.get("/buscar_por_equipo/:team_id", async (req, res) => {
    const team_id = req.params.team_id;
    const assignment_by_team = await assignment.findAll({where: {team_id: team_id}});
    res.json(assignment_by_team);
  });

  router.get("/buscar/:team_id", async (req, res) => {
    const team_id = req.params.team_id;
    const assignment_by_team = await assignment.findAll({where: {team_id: team_id}});
    res.json(assignment_by_team);
  });


router.post("/", async (req, res) => {
    const save_assignment = req.body;
    await assignment.create(save_assignment);
    res.json(save_assignment);

});


router.put("/",  async (req, res) => {
    const { Subject, id } = req.body;
    await assignment.update({ Subject: Subject }, { where: { id: id } });
    res.json(Subject);
  });
  
  router.delete("/:assignment_id", async (req, res) => {
    const assignment_id = req.params.assignment_id;
    await assignment.destroy({
      where: {
        id: assignment_id,
      },
    });
  
    res.json("DELETED SUCCESSFULLY");
  });

module.exports = router;


