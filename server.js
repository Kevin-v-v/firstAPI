const express = require('express');
const sqlite3 = require('sqlite3');
const Sequelize = require('sequelize');

const app = express();

const tasksRoutes = require('./routes/tasks_routes');
const registrationsRoutes = require('./routes/registrations_routes');
const sessionsRoutes = require('./routes/sessions_routes');

app.use(express.json());
app.use(tasksRoutes);
app.use(registrationsRoutes);
app.use(sessionsRoutes);
app.listen(3000, ()=>{
    console.log("Server on port 3000");
}
);

