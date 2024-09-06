const Recipe = require("../../models/recipe");

async function list(req, res) {
  try {
    const recipes = await Recipe.find({});
    if (!recipes) {
      return res.status(404).send("No recipes found");
    }
    return res.status(200).json(recipes);
  } catch (error) {
    return res.status(400).send();
  }
}

module.exports = list;
