import Card from './cardRecipe';
import estilo from '../homePage/modules/card.module.css'

const Cards = ({allRecipes}) => {
   return( 
      <div className={estilo.list}>
         {
            
            allRecipes?.map(({id, title, image, diets})=>{
               return <Card
               key={id}
                title={title}
                image={image}
                diets={diets}
               />
            })
         }
      </div>);
}
export default Cards;
