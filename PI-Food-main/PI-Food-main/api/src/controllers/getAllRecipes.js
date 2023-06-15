const {API_KEY2} = process.env;
const {API_KEY} = process.env;
const {API_KEY3} = process.env;
const {API_KEY4} = process.env;
const {API_KEY5} = process.env;
const axios = require('axios')

module.exports = async (req, res) =>{
    try {
        const response = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY5}&addRecipeInformation=true&Number=30`)).data.results
        return res.status(202).json({response})
    } catch (error) {
        return res.status(500).send(error.message)
    }
} 