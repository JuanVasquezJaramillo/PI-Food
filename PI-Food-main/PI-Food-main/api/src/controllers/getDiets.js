const axios = require('axios');
const {Recipe, Diet} = require('../db')
const {API_KEY} = process.env;

module.exports = async (req, res) => {
    try {
        let diet;
        let dietBd;
        const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&diets&number=100`)).data.results
        if(response){
            let dietas =[];
            response.map((prop) => dietas.push(prop.diets))
            for(let i = 0; i < dietas.length; i++){
                    diet = {
                    Id: response.id,
                    Dietas: dietas.flat().filter((elemento, indice, arr) => arr.indexOf(elemento) === indice)
                    }
                    Diet.findOrCreate({where:{diet}})
            }
            return res.status(200).json(diet);
        }else{
            dietBd = await Diet.findAll();
            return res.status(202).json(dietBd);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}