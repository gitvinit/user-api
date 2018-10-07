var express = require('express');
var userRouter = express.Router();
var userController = require('./user-controller')();

var routes = function () {

    userRouter.route('/')
        .get(userController.listAllUsers)
        .post(userController.addUser);

    userRouter.route('/:userId')
        .get(userController.getSingleUser)
        .put(userController.updateUser)
        .delete(userController.deleteUser);
    return userRouter;
};

module.exports = routes;
