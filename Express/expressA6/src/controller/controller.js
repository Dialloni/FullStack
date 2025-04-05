let recipes = [];
let currentId = 1;

// Middleware to validate recipe data
function validateRecipeData(req, res, next) {
  const { title, description, ingredients, instructions } = req.body;
  if (!title || !description || !Array.isArray(ingredients) || !instructions) {
    return res.status(400).json({ error: 'Title, description, ingredients, and instructions are required fields' });
  }
  next();
}

// GET /recipes: Retrieve a list of all recipes
exports.getAllRecipes = (req, res) => {
  res.status(200).json(recipes);
};

// GET /recipes/:id: Retrieve details of a specific recipe by ID
exports.getRecipeById = (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  res.json(recipe);
};

// POST /recipes: Add a new recipe to the collection
exports.addRecipe = [validateRecipeData, (req, res) => {
  const { title, description, ingredients, instructions } = req.body;
  const newRecipe = { id: currentId++, title, description, ingredients, instructions };
  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
}];

// PUT /recipes/:id: Update details of a recipe by ID
exports.updateRecipe = [validateRecipeData, (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (!recipe) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  const { title, description, ingredients, instructions } = req.body;
  recipe.title = title;
  recipe.description = description;
  recipe.ingredients = ingredients;
  recipe.instructions = instructions;
  res.json(recipe);
}];

// DELETE /recipes/:id: Delete a recipe by ID
exports.deleteRecipe = (req, res) => {
  const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
  if (recipeIndex === -1) {
    return res.status(404).json({ error: 'Recipe not found' });
  }
  recipes.splice(recipeIndex, 1);
  res.status(204).send();
};