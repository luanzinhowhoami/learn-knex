const routes = require("express").Router();

const UserController = require("./controllers/UsersController");

routes.get("/users", UserController.index);

module.exports = routes;
