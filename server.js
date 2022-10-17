const express = require('express');
const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');

const app = express();

const tasksRoutes = require('./routes/tasks_routes')

app.use(express.json());
app.use(tasksRoutes);

app.listen(3000, ()=>{
    console.log("Server on port 3000");
}
);

