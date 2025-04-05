const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js');

router.get('/recipes', controller.getAllRecipes);
router.get('/recipes/:id', controller.getRecipeById);
router.post('/recipes', controller.addRecipe);
router.put('/recipes/:id', controller.updateRecipe);
router.delete('/recipes/:id', controller.deleteRecipe);

module.exports = router;