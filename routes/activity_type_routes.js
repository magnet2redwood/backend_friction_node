const activityTypeController = require('../controller/activity_type_controller');
const express = require('express');
const checkAuth = require('../middleware/mideleware');

const route = express.Router();

route.post('/add-activity-type', checkAuth.checkAuth, activityTypeController.addActivityType);
route.put('/update-activity-type', checkAuth.checkAuth, activityTypeController.updateActivityType);
route.get('/get-all-activity-types', checkAuth.checkAuth, activityTypeController.getAllActivityTypes);

module.exports = route;