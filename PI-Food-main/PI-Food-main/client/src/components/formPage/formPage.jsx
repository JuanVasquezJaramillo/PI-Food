import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import estilo from '../formPage/formPage.module.css'
import NavBar from '../homePage/searchBar';
import { getDiets, postRecipe } from '../../Redux/actions';
const Form = () => {

    
    
    const dispatch = useDispatch();
    const listDiets = useSelector((state) => state.diets)
    const lis = listDiets?.map((e) => e);
   
    console.log("ProbandoForm", listDiets)

    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])
    




    //const listDiets = useSelector((state) => state.diets)
    // const listaDietas = listDiets.map((elemento) => elemento.Dietas);
    // useEffect(() => {
    //     dispatch(getDiets());
    // }, [dispatch])
    //console.log("PROBANDO DESDE FORM",listDiets);
    const [recipeInfo, setRecipeInfo] = useState(
        {
            Nombre: '',
            Imagen: '',
            Resumen_Del_Plato: '',
            Health_Score: '1',
            diets: [],
            Paso_A_Paso: ''
        });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!recipeInfo.Nombre) {
            alert('PRUEBA')
        } else {
            dispatch(postRecipe(recipeInfo))
            console.log("BANDERA FRONT", recipeInfo);
        }
        alert('SE HA CREADO');
        setRecipeInfo({
            Nombre: '',
            Imagen: '',
            Resumen_Del_Plato: '',
            Health_Score: '1',
            diets: [],
            Paso_A_Paso: ''
        })
    };

    const handleChange = (event) => {
        event.preventDefault();
        setRecipeInfo({
            ...recipeInfo,
            [event.target.name]: event.target.value
        })
        console.log("GOLAZOO", event.target.value);
    };

    const handleDietChange = (event) => {
        if (event.target.checked) {
            setRecipeInfo({ ...recipeInfo, diets: [...recipeInfo.diets, event.target.value] })
        }
        if (!event.target.checked) {
            setRecipeInfo({
                ...recipeInfo,
                diets: [recipeInfo.diets.filter((dieta) => dieta !== event.target.value)]
            })
        }
    }

    return (
        <div>
            <div className={estilo.nav}>
                <NavBar />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={estilo.contenedor}>
                    <div className={estilo.subContenedor}>
                        <label htmlFor="nameRecipe">Nombre de la Receta</label>
                        <input
                            className={estilo.pruebaI}
                            type="text"
                            value={recipeInfo.Nombre}
                            name="Nombre"
                            onChange={(event) => handleChange(event)}
                        />
                        <span>{recipeInfo.Nombre.length === 0 && "POR FAVOR LLENA ESTA CASILLA"}</span>


                        <label htmlFor='puntajeSaludable'>Health Score</label>
                        <input
                            className=''
                            name="Health_Score"
                            value={recipeInfo.Health_Score}
                            type="range"
                            min={1}
                            max={100}
                            onChange={(evento) => handleChange(evento)}
                        />
                        <label htmlFor="puntajeEnNumero">{recipeInfo.Health_Score}</label>
                        <span>{recipeInfo.Health_Score === '1' && "POR FAVOR ELIGE UN NIVEL"}</span>



                        <label htmlFor="summaryRecipe">Resumen de la Receta</label>
                        <input
                            className={estilo.resumen}
                            type="text"
                            name='Resumen_Del_Plato'
                            value={recipeInfo.Resumen_Del_Plato}
                            onChange={(event) => handleChange(event)}
                        />
                        <span>{recipeInfo.Resumen_Del_Plato === '' && 'POR FAVOR, AGREGA UN RESUMEN'}</span>

                        <label htmlFor="instructionsRecipe">Paso a paso de la Receta</label>
                        <input
                            className={estilo.resumen}
                            type="text"
                            name='Paso_A_Paso'
                            value={recipeInfo.Paso_A_Paso}
                            onChange={(event) => handleChange(event)}
                        />

                        <label htmlFor="imgRecipe">agrega una URL para la imagen de la receta!</label>
                        <input
                            className=''
                            type="text"
                            name='Imagen'
                            value={recipeInfo.Imagen}
                            onChange={(evento) => handleChange(evento)}
                        />
                        <img src={recipeInfo.Imagen} alt='No se ha encontrado una Imagen con esta URL' />



                        <label htmlFor="selectDiet">Selecciona el tipo de dieta</label>
                        {/* <div className='dietasA' onChange={(event)=>handleDietChange(event)}></div>
                        {
                        listaDietas.map((elemento)=>(
                            <div>
                                <input type='checkBox'className={estilo.pruebaI} value={elemento}></input>
                                <label htmlFor="dietas">{elemento.toUpperCase()}</label>
                            </div>
                        ))
                        } */}
                        <div className="" onChange={(e) => handleDietChange(e)}>
                            {lis?.map((e) => (
                                <div key={e}>
                                    <input type="checkbox" name="diets" value={e} />
                                    <label>{e.toUpperCase()}</label>
                                </div>
                            ))}
                        </div>








                        {!recipeInfo.Nombre || !recipeInfo.Resumen_Del_Plato || !recipeInfo.Paso_A_Paso || recipeInfo.Health_Score === '1' ? (
                            <button disabled id='btn'>CREAR</button>
                        ) : (
                            <button id='btn'>CREAR</button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;




