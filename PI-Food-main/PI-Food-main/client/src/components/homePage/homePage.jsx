import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, getRecipesByName, getDiets, filterTypeDiets, orderRecipesByName, orderRecipesByHealth, getRecipesBD } from '../../Redux/actions';
import SearchBar from './searchBar';
import estilo from './modules/homePage.module.css';
import Cards from './cardsRecipes';
import Paginado from './paginado.jsx';

const Home = () => {

    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const diets = useSelector((state) => state.diets)

    const [name, setName] = useState('');
    const [defaultOrder, setDefaultOrder] = useState('porDefecto')
    const [defaultScore, setDefaultScore] = useState('porDefecto1'); 
    const [defaultDiet, setDefaultDiet] = useState('porDefecto2'); 
    const [defaultOrigin, setDefaultOrigin] = useState('porDefecto3');

    console.log("PROBANDO HOME", allRecipes)

    useEffect(() => {
        dispatch(getRecipes())
        dispatch(getDiets())
    }, [dispatch])


    //HANDLERS
    const handleChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getRecipesByName(name));
        setName('')
        setCurrentPag(1);
        if(name === ''){
            // alert('Debes ingresar un nombre')
            return(
                <div></div>
            )
        }
    }

    const handleOrderName = (event) => {
        event.preventDefault();
        dispatch(orderRecipesByName(event.target.value))
        setCurrentPag(1);
        setDefaultOrder(`${event.target.value}`)
        
    }

    const handleScoreOrder = (event) => {
        event.preventDefault();
        dispatch(orderRecipesByHealth(event.target.value));
        setCurrentPag(1);
        setDefaultScore(`${event.target.value}`)
    }

    const handleFilterDiets = (event) => {
        dispatch(filterTypeDiets(event.target.value))
        setCurrentPag(1);
        setDefaultDiet(`${event.target.value}`)
    }

    const handleFilterOrigin = (event) => {
        dispatch(getRecipesBD())
        setCurrentPag(1);
        setDefaultOrigin(`${event.target.value}`)
    }


    //METODO PARA LIMPIAR FILTROS 
    
    const clearFilters = () => {
        dispatch(getRecipes()); // Vuelve a obtener todas las recetas sin aplicar filtros
        setCurrentPag(1); // Reinicia la página actual del paginado
        setDefaultOrder('porDefecto');
        setDefaultScore('porDefecto1');
        setDefaultDiet('porDefecto2');
        setDefaultOrigin('porDefecto3');
      };



    //LÓGICA PAGINADO
    const [currentPag, setCurrentPag] = useState(1);
    const [cantidadPorPag] = useState(10);
    const lastRecipeIndex = currentPag * cantidadPorPag
    const firstRecipeIndex = lastRecipeIndex - cantidadPorPag
    const currentRecipes = allRecipes.slice(firstRecipeIndex, lastRecipeIndex)

    const paginado = (pageNumber) => {
        setCurrentPag(pageNumber)
    }



    return (
        <div>
            <div className={estilo.barraNav}>
                <div className={estilo.prueba}>
                    <form>
                        <input type='search' placeholder='Buscar...' onChange={(event) => handleChange(event)} value={name} />
                        <button type='submit' onClick={(event) => handleSubmit(event)} className={estilo.boton}>Buscar</button>
                    </form>
                    <SearchBar />
                </div>
            </div>
            <div className={estilo.contenedor}>
                <Paginado cantidadPorPag={cantidadPorPag}
                    allRecipes={allRecipes.length}
                    paginado={paginado} />
            </div>

            <div>
                <div className={estilo.contenedor}>
                    <select onChange={event => handleOrderName(event)} className={estilo.select} value={defaultOrder}>
                        <option value='porDefecto'>Ordenar</option>
                        <option value='A-Z'>A-Z</option>
                        <option value='Z-A'>Z-A</option>
                    </select>

                    <select onChange={event => handleScoreOrder(event)} className={estilo.select} value={defaultScore}>
                        <option value='porDefecto1'>Seleccionar filtro</option>
                        <option value='MayorHealthScore'>Mayor HealthScore</option>
                        <option value='MenorHealthScore'>Menor HealthScore</option>
                    </select>

                    <select onChange={event => handleFilterDiets(event)} className={estilo.select} value={defaultDiet}>
                        <option value='porDefecto2'>Seleccionar filtro</option>
                        {diets.map((diet) => (<option value={`${diet.Nombre}`}> {diet.Nombre} </option>))}
                    </select>

                    <select onChange={event => handleFilterOrigin(event)} className={estilo.select} value={defaultOrigin}>
                        <option value='porDefecto3'>Seleccionar filtro</option>
                        {/* <option value='originApi'>Originario de Api</option> */}
                        <option value='originBD'>Creado por ti</option>
                    </select>
                </div>

            </div>
            <div><button onClick={clearFilters} className={''}>LIMPIAR FILTROS</button></div>
            <div className={estilo.contenedor}>
                <Cards allRecipes={currentRecipes}></Cards>
            </div>
        </div>
    )
}

export default Home;