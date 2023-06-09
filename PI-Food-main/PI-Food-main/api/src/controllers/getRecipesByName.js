const axios = require('axios');
const {Recipe} = require('../db')
const {API_KEY} = process.env;
const {API_KEY2} = process.env;

module.exports = async (req, res) => {
    //await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`);
    //let receta = await Recipe.findAll({atributes:["Nombre"]})
    try {
        let {name} = req.query;
        if(name){
            let recetasBD = await Recipe.findAll()
            let receta = recetasBD.filter((receta)=> receta.Nombre.toLowerCase().includes(name.toLowerCase()));
            //const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&Number=100`)).data.results;
            if(receta.length===0 || !receta){  
                const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&Number=100`)).data.results
                let recetaP = response.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()));
                return res.status(200).json(recetaP)
                // recetaAPI.length ? res.status(200).json(recetaAPI) : res.status(404).send('NOT FOUND')
            }else{
                res.status(202).json(receta);
            }
            //-------------FUNCIONA ESTO DE ABAJO SIN NADA DE ARRIBA
            // const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY2}&addRecipeInformation=true&Number=100`)).data.results
            // let recetaP = response.filter((recipe) => recipe.title.toLowerCase().includes(name.toLowerCase()));
            // return res.status(200).json(recetaP)  //res.status(404).send('NOT FOUND')
            
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}