const initialState = {
    recipes: [],
    diets: [],
    detail: [],
}

const reducer = (state = initialState, action) => {
    console.log('desde el reducer',action)
    switch (action.type) {
        case 'GET_RECIPES':
            return{
                ...state,
                recipes: action.payload,
            }
        case "GET_NAME_RECIPE":
            return {
                ...state,
                recipes: action.payload,
            };
        case 'FILTER':
                const hola = state.recipes.filter((recipe) => recipe.diets === action.payload)
            return{
                ...state,
                recipes: hola
            }
        case 'ORDER':
                const orderRecipes = [...state.recipes];
                return{
                    ...state,
                    recipes: 
                    action.payload === "A"
                    ? orderRecipes.sort((a, b) => a.id - b.id)
                    : orderRecipes.sort((a, b) => b.id - a.id)
                }
        
        case 'GET_DIETS':
            return{
                ...state,
                diets: action.payload
            }
        case 'POST_RECIPE':
            return{
                ...state,
            }
        default:
            return {...state};
            break;
    }
}

export default reducer;