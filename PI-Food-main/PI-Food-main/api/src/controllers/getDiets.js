const axios = require('axios');
const {Recipe, Dietas} = require('../db')
const {API_KEY} = process.env;
const {API_KEY5} = process.env;

const getLocalDiets = async () => {
    let dietas = await Dietas.findAll();
    if(!dietas.length){
    const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY5}&addRecipeInformation=true&diets&number=39`)).data.results
        if(response){
            let dietas =[];
            response.map((prop) => dietas.push(prop.diets))
            let prueba = dietas.flat().filter((elemento, indice, arr) => arr.indexOf(elemento) === indice)
            for(let i = 0; i < prueba.length; i++){
                    diet = {
                    Nombre: prueba[i]
                    }
                    await Dietas.create(diet)
                }
            }
        }
        return await Dietas.findAll();
}


module.exports = async (req, res) => {
    // try {
    //     let diet;
    //     let dietBd;
    //     const response = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY5}&addRecipeInformation=true&diets&number=39`)).data.results
    //     if(response){
    //         let dietas =[];
    //         response.map((prop) => dietas.push(prop.diets))
    //         let prueba = dietas.flat().filter((elemento, indice, arr) => arr.indexOf(elemento) === indice)
    //         for(let i = 0; i < prueba.length; i++){
    //                 diet = {
    //                 Nombre: prueba[i]
    //                 }
    //               await Dietas.create(diet)
    //         }
    //         const dietasR = await Dietas.findAll();
    //         return res.status(200).json(dietasR);
    //     }else{
    //         dietBd = await Dietas.findAll();
    //         return res.status(202).json(dietBd);
    //     }
    // } catch (error) {
    //     res.status(500).send(error.message);
    // }
    try {
        const response = await getLocalDiets();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).send(error.message)
    }
}