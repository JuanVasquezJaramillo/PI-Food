import { Link, NavLink } from 'react-router-dom';
import SearchBar from './searchBar';
import estilo from './modules/homePage.module.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Cards from './cardsRecipes';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, getRecipesByName} from '../../Redux/actions';

const Home = () => {
    const dispatch = useDispatch()
    const allRecipes = useSelector((state) => state.recipes)
    const [name, setName] = useState('');


    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch])

    

    const handleChange = (event) => {
        event.preventDefault()
        setName(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(getRecipesByName(name));
        setName('')
    }
    return (
    <div>
        <div className={estilo.barraNav}>
            <div className={estilo.prueba}>
                <form>
                <input type='search' onChange={(event) => handleChange(event)} value={name}/>
                {
                    
                    <Link to={`/detail/${name}`}>
                    <button type='submit' onClick={(event)=> handleSubmit(event)} className={estilo.boton}>Buscar</button>
                    </Link>

                }
                </form>
                <SearchBar/>
            </div>
        </div>
        <div className={estilo.contenedor}>
            <Cards allRecipes={allRecipes}></Cards>
        </div>
    </div>
    )
}

export default Home;