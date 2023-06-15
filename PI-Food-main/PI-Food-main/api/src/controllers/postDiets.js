const axios = require('axios');
const {Recipe} = require('../db')
const {API_KEY} = process.env;

module.exports = async (req, res) => {
    try {
        let recipe;
        // let prueba; //Variable auxiliar
        // let resultado; //Otra variable auxiliar
        const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&diets&number=100`)).data.results
        if(response){
            let dietas =[];
            response.map((prop) => dietas.push(prop.diets))
            //console.log('=============>',dietas.flat())
            
            for(let i = 0; i < dietas.length; i++){
                    // prueba = dietas.flat() //Guardamos en nuestra variable auxiliar "prueba", el array resultante del metodo .flat()
                    // resultado = prueba.filter((elemento, indice, arr) => arr.indexOf(elemento) === indice) //En nuestra segunda variable auxiliar, almacenamos el resultado del filtrado
                    recipe = {
                    Id: response.id,
                    Dietas: dietas.flat().filter((elemento, indice, arr) => arr.indexOf(elemento) === indice)
                    }
            }
            return res.status(200).json(recipe);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}