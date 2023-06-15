import { useParams } from 'react-router-dom';
import SearchBar from '../homePage/searchBar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesByName } from '../../Redux/actions';
import estilo from '../detailPage/detailpage.module.css'
import cuchillo from '../../assets/cuchillo.png'
import tenedor from '../../assets/tenedor.png'

const Detail = () => {
    const {name} = useParams();
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getRecipesByName(name));
        console.log("-----DETAIL-------",dispatch(getRecipesByName(name)));
    }, [dispatch, name])

    const res = useSelector((state)=> state.recipes)
    //console.log("PROBANDO PROBANDO", res[0].analyzedInstructions.map((prop)=>prop.steps.map((prop)=>prop.step)))
    
    //const recorriendoHastaNumber = res[0].analyzedInstructions.map((prop)=>prop.steps.map((prop)=>prop.number));
    
    const pasos = res[0].analyzedInstructions.map((prop)=>prop.steps.map((prop)=>prop.step))
    
    //console.log("BANDERA", recorriendoHastaNumber);
    
    return(
    <div>
        <div className={estilo.prueba}>
        <SearchBar/>
        </div>
            <div className={estilo.card}>
                {
                    res?
                    <div>
                    <h1>ID: {res[0].id}</h1>
                    <img src={tenedor} className={estilo.tamaNio}></img>
                    <img className={estilo.imagen} src={res[0].image}></img>
                    <img src= {cuchillo}></img>
                    <h1>Nombre: {res[0].title}</h1>
                    <h2>RESUMEN: </h2>
                    <p>{res[0].summary.replace(/<[^>]*>?/g, "")}</p>
                    <h1>Healthly level: {res[0].healthScore}</h1>
                    {pasos?
                    (<div>
                        <h2>PASO A PASO:</h2>
                        <p>{pasos}</p>
                    </div>
                    ) : (<p>NO HAY PASO A PASO DE ESTA RECETA</p>)}
                    {
                        res[0].diets?(
                            <div>
                                <h2>Dietas: {res[0].diets.join(', ')}</h2>
                            </div>
                        ) : (<h2>No hay dietas disponibles</h2>)
                    }
                    </div>
                    :<h1>No hay detalles...</h1>
                }
                    
            </div>
    </div>
)
}


export default Detail;