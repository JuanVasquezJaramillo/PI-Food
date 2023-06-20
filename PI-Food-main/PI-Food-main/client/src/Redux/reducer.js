const initialState = {
    recipes: [],
    diets: [],
    detail: [],
}

const reducer = (state = initialState, action) => {
    console.log('desde el reducer', action)

    switch (action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload,
            };
        case 'GET_RECIPES_BD':
            return {
                ...state,
                recipes: action.payload,
            }
        case "GET_NAME_RECIPE":
            return {
                ...state,
                recipes: action.payload,
            };
        case 'POST_RECIPE':
            return {
                ...state,
            }
        case 'FILTER_DIETS':
            const filtrarDietas = [...state.recipes]
            const dietasFiltradas =
                action.payload === "porDefecto2"
                    ? filtrarDietas
                    : filtrarDietas.filter((recipe) => recipe.Diets.includes(action.payload))
            return {
                ...state,
                recipes: dietasFiltradas
            }
        case 'ORDER_NAME':
            const orderRecipes = [...state.recipes];
            const recipesOrdenado =
                action.payload === "A-Z"
                    ? orderRecipes.sort((a, b) => {
                        if (a.Nombre > b.Nombre) {
                            return 1;
                        }
                        if (b.Nombre > a.Nombre) {
                            return -1;
                        }
                        return 0;
                    })
                    : orderRecipes.sort((a, b) => {
                        if (a.Nombre > b.Nombre) {
                            return -1;
                        }
                        if (b.Nombre > a.Nombre) {
                            return 1;
                        }
                        return 0;
                    })
            return {
                ...state,
                recipes: orderRecipes
            }
        case 'ORDER_HEALTH':
            const Recipes = state.recipes
            const recipesH =
                action.payload === 'MenorHealthScore'
                    ? Recipes.sort((a, b) => {
                        if (a.Health_Score > b.Health_Score) {
                            return 1;
                        }
                        if (b.Health_Score > a.Health_Score) {
                            return -1;
                        }
                        return 0;
                    })
                    : Recipes.sort((a, b) => {
                        if (a.Health_Score > b.Health_Score) {
                            return -1;
                        }
                        if (b.Health_Score > a.Health_Score) {
                            return 1;
                        }
                        return 0;
                    })
            return {
                ...state,
                recipes: recipesH
            }

        default:
            return { ...state };
    }
}

export default reducer;