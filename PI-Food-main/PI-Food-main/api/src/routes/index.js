const { Router } = require('express');
const getRecipesByID = require('../controllers/getRecipesByID');
const getRecipesByName = require('../controllers/getRecipesByName');
const postRecipe = require('../controllers/postRecipe');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/name", getRecipesByName);
router.get("/recipes/:id", getRecipesByID); //"/recipes/:idRecipe"
router.post("/recipes", postRecipe);

module.exports = router;
