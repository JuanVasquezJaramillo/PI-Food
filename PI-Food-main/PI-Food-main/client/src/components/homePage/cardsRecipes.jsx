import Card from './cardRecipe';
import estilo from '../homePage/modules/card.module.css'

const Cards = ({allRecipes}) => {
   return( 
      <div className={estilo.list}>
         {
            
            allRecipes?.map(({title, image, diets})=>{
               return <Card
                title={title}
                image={image}
                diets={diets}
               />
            })
         }
      </div>);
}
export default Cards;
