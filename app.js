const helperRoutes = require('./routes/helper_routes');
const serviceTechRoutes = require('./routes/service_tech_routes');
const activityTypeRoutes = require('./routes/activity_type_routes');
const userRoutes = require('./routes/user_routes');
// const activityStatusRoutes = require('./routes/activity_status_routes');
const express = require('express');
const cors = require('cors');

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true}));

app.use(cors({}));
app.enable("trust proxy");

app.use(`${process.env.API_URL}/user`, userRoutes);
app.use(`${process.env.API_URL}/helper`, helperRoutes);
app.use(`${process.env.API_URL}/service-tech`, serviceTechRoutes);
app.use(`${process.env.API_URL}/activity-type`, activityTypeRoutes);
// app.use(`${process.env.API_URL}/activity-status`, activityStatusRoutes);

module.exports = app;