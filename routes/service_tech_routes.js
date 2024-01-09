const serviceTechController = require('../controller/service_tech_controller');
const express = require('express');
const checkAuth = require('../middleware/mideleware');

const route = express.Router();

route.post('/add-service-tech', checkAuth.checkAuth, serviceTechController.addServiceTech);
route.put('/update-service-tech', checkAuth.checkAuth, serviceTechController.updateServiceTech);
route.get('/get-all-service-techs', checkAuth.checkAuth, serviceTechController.getAllServiceTechs);

module.exports = route;