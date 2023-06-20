import Card from './cardRecipe';
import estilo from '../homePage/modules/card.module.css'

const Cards = ({allRecipes}) => {
   return( 
      <div className={estilo.list}>
         {
            
            allRecipes?.map(({id, Nombre, Imagen, Diets, Health_Score})=>{
               return <Card
               key={id}
                Nombre={Nombre}
                Imagen={Imagen}
                Diets={Diets}
               />
            })
         }
      </div>);

      
// Health_Score={Health_Score} Para mostrar HS en la Card
}
export default Cards;

