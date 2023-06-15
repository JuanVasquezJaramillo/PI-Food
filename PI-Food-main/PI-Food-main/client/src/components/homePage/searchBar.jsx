import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { getRecipesByName } from '../../Redux/actions';
import { Form, Link, NavLink } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import estilo from './modules/homePage.module.css'
const SearchBar = () =>{

   // const dispatch = useDispatch()
   // const [name, setName] = useState('');
   const location = useLocation();


   // const handleChange = (event) => {
   //       event.preventDefault()
   //       setName(event.target.value)
   // };

   // const handleSubmit = (event) => {
   //    event.preventDefault()
   //    dispatch(getRecipesByName(name));
   //    setName('')
   // }


   return(
      <div>
         <div className={estilo.crear}>
                {
                  location.pathname === '/form'? 
                  <button disabled id='btnForm'></button>
                  :
                <Link to='/form'>
                <button className={estilo.boton}>CREA UNA RECETA</button>
                </Link>
               }
               {
                  location.pathname === '/home'? 
                  <button disabled id='btn'></button>
                  :
                  <Link to= '/home'>
                  <button className={estilo.boton} id='btn'>HOME</button>
                  </Link>
               }
                
                <Link to= '/about'>
                  <button className={estilo.boton}>ACERCA DE</button>
                </Link>
         </div>
         {/* <form>
         <input type='search' onChange={(event) => handleChange(event)} value={name}/>
         <button type='submit' onClick={(event)=> handleSubmit(event)}>Buscar</button>
         </form> */}
      </div>
   );
}
export default SearchBar;