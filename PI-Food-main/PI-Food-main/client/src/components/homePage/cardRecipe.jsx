import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import estilo from './modules/card.module.css'

const Card = ({id, title, image, diets}) =>{
    return(
            <div className={estilo.contenedor}>
            <Link to={`/detail/${title}`}>
            <img src={image}></img>
            </Link>
            <h1>{title}</h1>
            <h1>Tipo de dieta: {diets.join(', ')}</h1>
            </div>
    )
}

export default Card;