const express = require("express");
const createRecipe = require("./controllers/recipes/create");
const getRecipes = require("./controllers/recipes/list");
const routes = express.Router();

routes.post("/recipes", (req, res) => createRecipe(req, res));

routes.get("/recipes", (req, res) => getRecipes(req, res));

module.exports = routes;
