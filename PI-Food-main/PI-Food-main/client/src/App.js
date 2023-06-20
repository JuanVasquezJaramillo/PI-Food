import './App.css';
import Loading from './components/loadingPage/loadingPage';
import Home from './components/homePage/homePage';
import Form from './components/formPage/formPage';
import NavBar from './components/homePage/searchBar';
import Detail from './components/detailPage/detailPage'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Card from './components/homePage/cardRecipe';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, getRecipesByName, getDiets } from './Redux/actions';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loading />} />
        {/* <Home onSearch={onSearch} recipes={recipes}/> */}
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:name' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
