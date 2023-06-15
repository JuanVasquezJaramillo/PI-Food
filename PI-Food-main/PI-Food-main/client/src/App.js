import './App.css';
import Loading from './components/loadingPage/loadingPage';
import Home from './components/homePage/homePage';
import Form from './components/formPage/formPage';
import NavBar from './components/homePage/searchBar';
import Detail from './components/detailPage/detailPage'
import axios from 'axios';
import {useState} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Card from './components/homePage/cardRecipe';

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();



  // const [recipes, setRecipes] = useState([]);
  //   const onSearch = async (name) => {
  //       try {
  //           const {results} = (await axios.get(`http://localhost:3001/recipes/name?name=${name}`)).data
  //           if(results) {
  //              setRecipes((oldRecipes) => [...oldRecipes, results]);
  //           }
  //           else {
  //              alert('¡No hay recetas con este nombre!');
  //           }
  //       } catch (error) {
          
  //       }
  //     }


  return (
    <div className="App">
      <Routes> 
            <Route path='/' element={<Loading/>}/>
            {/* <Home onSearch={onSearch} recipes={recipes}/> */}
            <Route path='/home' element={<Home/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/detail/:name' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
