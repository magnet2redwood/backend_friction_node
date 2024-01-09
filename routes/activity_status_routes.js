const activityStatusController = require('../controller/activity_status_controller');
const express = require('express');
const checkAuth = require('../middleware/mideleware');

const route = express.Router();

route.post('/add-activity-status', checkAuth.checkAuth, activityStatusController.addActivityStatus);
route.put('/update-activity-status', checkAuth.checkAuth, activityStatusController.updateActivityStatus);
route.get('/get-all-activity-status',checkAuth.checkAuth, activityStatusController.getAllActivityStatuss);

module.exports = route;