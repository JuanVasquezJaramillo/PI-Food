const { Router } = require('express');
const getRecipesByID = require('../controllers/getRecipesByID');
const getRecipesByName = require('../controllers/getRecipesByName');
const postRecipe = require('../controllers/postRecipe');
const getDiets = require('../controllers/getDiets');
const postDiets = require('../controllers/postDiets');
const getAllRecipes = require('../controllers/getAllRecipes');
const {conn} = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes", getAllRecipes);
router.get("/recipes/name", getRecipesByName);
router.get("/recipes/:id", getRecipesByID); //"/recipes/:idRecipe"
router.post("/recipes/", postRecipe);
router.get("/diets", getDiets);
router.post("/diets/", postDiets);

module.exports = router;
