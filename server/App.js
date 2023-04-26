const express = require("express");
const db = require("./db/db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const routes = require("./routes/ToDoRoutes");

app.use(routes);

app.listen(4000, () => {
  console.log("Server is running");
});
