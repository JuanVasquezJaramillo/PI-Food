import { useState } from 'react';
import estilo from '../formPage/formPage.module.css'
import NavBar from '../homePage/searchBar';
const Form = () => {

    const [recipeInfo, setRecipeInfo] = useState(
        {
            nombreReceta: '',
            resumen: ''
        });

    const handleChange = (event) => {
        setRecipeInfo({
            ...recipeInfo,
            [event.target.name] : event.target.value
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    return(
            <div>
                <div className={estilo.nav}>
                <NavBar/>
                </div>
            <form onSubmit={handleSubmit}>
                <div className={estilo.contenedor}>
                    <div className={estilo.subContenedor}>
                        <label htmlFor="nameRecipe">Nombre de la Receta</label>
                        <input className={estilo.pruebaI} type="text" name="nombre de receta"/>
                
                        <label htmlFor="summaryRecipe">Resumen de la Receta</label>
                        <input className={estilo.resumen} type="text" name='resumen'/>

                        <label htmlFor="instructionsRecipe">Paso a paso de la Receta</label>
                        <input className={estilo.resumen} type="text" name='instructions'/>

                        <label htmlFor="imgRecipe">agrega una URL para la imagen de la receta</label>
                        <input className={estilo.pruebaI} type="text" name='img'/>

                        <label htmlFor="selectDiet">Selecciona el tipo de dieta</label>
                        <select className={estilo.pruebaI}></select>
                        <button className={estilo.boton}>crear</button>
                    </div>
                </div>
            </form>
            </div>
    );
}

export default Form;