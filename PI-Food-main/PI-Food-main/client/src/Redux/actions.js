import axios from "axios";



export const getRecipes = ()=>{
        return async (dispatch) => {
            var json = await axios.get("http://localhost:3001/recipes"); //console.log("DESDE", json.data.response);
            return dispatch({
                type: "GET_RECIPES",
                payload: json.data.response,
            });
        };
};

export const getRecipesByName = (recipe) => {
    return async (dispatch) => {
        try {
            let response = (await axios.get(`http://localhost:3001/recipes/name?name=${recipe}`))
            return dispatch({
                type: "GET_NAME_RECIPE",
                payload: response.data
            });
        } catch (error) {
            
        }
    }
};

export const getDiets = ()=>{
    return async (dispatch) =>{
        try {
            let response = (await axios.get(`http://localhost:3001/diets`)).data.results
            return dispatch({
                type: "GET_DIETS",
                payLoad: response
            })
        } catch (error) {
            
        }
    }
}

export const filterTypeDiets = (diet) => {
    return {
        type: 'FILTER',
        payLoad: diet,
    }
};

export const orderRecipes = (recipe) => {
    return {
        type: 'ORDER',
        payLoad: recipe,
    }
};

export const postRecipe = (recipe) => {
    try {
        return async (dispatch) =>{
            let response = await axios.post(`http://localhost:3001/recipes/${recipe}`)
            return dispatch({
                type: "POST_RECIPE",
                payLoad: response
            })
        }
    } catch (error) {
        
    }
}

// export const cleanComp = ()=>{
//     return{
//         type: 'CLEAN_COMP'
//     }
// };
