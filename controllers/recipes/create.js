const Recipe = require("../../models/recipe");

async function create(req, res) {
  try {
    const { name, description, instructions } = req.body;

    const createdRecipe = await Recipe.create({
      name,
      description,
      instructions,
    });
    return res.status(201).json(createdRecipe);
  } catch (error) {
    return res.status(400).send();
  }
}

module.exports = create;
