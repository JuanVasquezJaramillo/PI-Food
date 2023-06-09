const axios = require('axios');
const {Recipe} = require('../db');

module.exports = async (req, res) => {
    try {
        const {Nombre, Imagen, Resumen_Del_Plato, Health_Score, Paso_A_Paso} = req.body;
        if(!Nombre || !Imagen || !Resumen_Del_Plato || !Health_Score || !Paso_A_Paso) return res.status(401).send('No se han recibido los suficientes datos')
        const newRecipe = await Recipe.findOrCreate({where:{Nombre, Imagen, Resumen_Del_Plato, Health_Score, Paso_A_Paso}});
        res.status(202).json(newRecipe);
    } catch (error) {
        res.status(500).send(error.message);
    }
}