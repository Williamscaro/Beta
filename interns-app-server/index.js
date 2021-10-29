const express = require("express");
const app = express();

app.use(express.json());

const db = require("./models");

const tagsRouter = require('./routes/tags');
app.use("/tags",tagsRouter);


app.listen(3001, () => {
  console.log("server on port 3001");
});
