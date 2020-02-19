const express = require('express');
const Router = express.Router();
const PetController = require("../controller/PetController");

Router.get('/', PetController.index);

Router.get('/add', PetController.add);

Router.get('/show', PetController.show);

module.exports = Router;
