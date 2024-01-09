const userController = require('../controller/user_controller');
const express = require('express');
const checkAuth = require('../middleware/mideleware');

const route = express.Router();

route.post('/user-signup', userController.userSignUp);
route.post('/user-login', userController.userLogin);
route.patch('/user-update', checkAuth.checkAuth, userController.updateProfile);
route.put('/get-user-profile',  checkAuth.checkAuth, userController.getUserProfile);
route.get('/get-all-users', checkAuth.checkAuth, userController.getAllTheUsers);

module.exports = route;