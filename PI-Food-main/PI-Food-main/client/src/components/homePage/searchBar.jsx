import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import estilo from './modules/homePage.module.css'
const SearchBar = () => {

   const location = useLocation();
   return (
      <div>
         <div className={estilo.crear}>
            {
               location.pathname === '/form' ?
                  <button disabled id='btnForm'></button>
                  :
                  <Link to='/form'>
                     <button className={estilo.boton}>CREA UNA RECETA</button>
                  </Link>
            }
            {
               location.pathname === '/home' ?
                  <button disabled id='btn'></button>
                  :
                  <Link to='/home'>
                     <button className={estilo.boton} id='btn'>INICIO</button>
                  </Link>
            }
            <Link to='/about'>
               <button className={estilo.boton}>ACERCA DE</button>
            </Link>
         </div>
      </div>
   );
}
export default SearchBar;