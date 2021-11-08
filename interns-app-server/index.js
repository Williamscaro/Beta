const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require("./models");

const tagsRouter = require('./routes/tags');
app.use("/tags",tagsRouter);

const assignmentRouter = require('./routes/assignment');
app.use("/assignment",assignmentRouter);

const type_assignmentRouter = require('./routes/type_assignment');
app.use("/type_assignment",type_assignmentRouter);

const status_assignmentRouter = require('./routes/status_assignment');
app.use("/status_assignment",status_assignmentRouter);

const teamsRouter = require('./routes/teams');
app.use("/teams",teamsRouter);

const userRouter = require('./routes/user');
app.use("/user",userRouter);


const user_categoryRouter = require('./routes/user_category');
app.use("/user_category",user_categoryRouter);


const personal_infoRouter = require('./routes/personal_info');
app.use("/personal_info",personal_infoRouter);

const priority_assignmentRouter = require('./routes/priority_assignment');
app.use("/priority_assignment",priority_assignmentRouter);

const direccionRouter = require('./routes/direccion');
app.use("/direccion",direccionRouter);

const web_resoursesRouter = require('./routes/web_resourses');
app.use("/web_resourses",web_resoursesRouter);


const institucion_infoRouter = require('./routes/institucion_info');
app.use("/institucion_info",institucion_infoRouter);


const web_resourses_typeRouter = require('./routes/web_resourses_type');
app.use("/web_resourses_type",web_resourses_typeRouter);


const academic_statusRouter = require('./routes/academic_status');
app.use("/academic_status",academic_statusRouter);

const users_teamsRouter = require('./routes/users_teams');
app.use("/users_teams",users_teamsRouter);

const tags_postRouter = require('./routes/tags_post');
app.use("/tags_post",tags_postRouter);

const tags_assignmentsRouter = require('./routes/tags_assignments');
app.use("/tags_assignments",tags_assignmentsRouter);

const postRouter = require('./routes/post');
app.use("/post",postRouter);


const documentsRouter = require('./routes/documents');
app.use("/documents",documentsRouter);



const attendanceRouter = require('./routes/attendance');
app.use("/attendance",attendanceRouter);



const assignment_documentsRouter = require('./routes/assignment_documents');
app.use("/assignment_documents",assignment_documentsRouter);



const answersRouter = require('./routes/answers');
app.use("/answers",answersRouter);



const answer_documentsRouter = require('./routes/answer_documents');
app.use("/answer_documents",answer_documentsRouter);








app.listen(3001, () => {
  console.log("server on port 3001");
});
