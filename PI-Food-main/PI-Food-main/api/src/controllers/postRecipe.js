const axios = require('axios');
const {Recipe, Diet} = require('../db');

const postRecipes = async (obj) => {
    try {
      if (!obj.Nombre || !obj.Resumen_Del_Plato)
        throw new Error("Mandatory data is missing (name or summary)");
      const created = await Recipe.create(obj);
      return created;
    } catch (error) {
      return error;
    }
  };


module.exports = async (req, res) => {
    try {
        const {Nombre, Imagen, Resumen_Del_Plato, Health_Score, Paso_A_Paso} = req.body;
        console.log("BANDER", req.body);
        if(!Nombre || !Imagen || !Resumen_Del_Plato || !Health_Score || !Paso_A_Paso) return res.status(401).send('No se han recibido los suficientes datos')
        const response = await postRecipes({
            Nombre,
            Imagen,
            Resumen_Del_Plato,
            Health_Score,
            Paso_A_Paso
        });
        //const newRecipe = await Recipe.findOrCreate({where:{Nombre, Imagen, Resumen_Del_Plato, Health_Score, Paso_A_Paso}});
        //const allRecipes = Recipe.findAll();
        res.status(202).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }

    // try {
    //     const { Nombre, Resumen_Del_Plato, Health_Score, Imagen, Paso_A_Paso } = req.body;
    //     console.log('BANDERA BACK', req.body);
    //     const nameCapitalized = Nombre[0].toUpperCase() + Nombre.substring(1);
    //     const response = await postRecipes({
    //       Nombre: nameCapitalized,
    //       Resumen_Del_Plato,
    //       Health_Score,
    //       Imagen,
    //       Paso_A_Paso,
          
    //     });
    //     return res.status(200).json(response);
    //   } catch (error) {
    //     res.status(400).json({ error: error.message });
    //   }



}