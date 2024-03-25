import Navigationbar from './components/Navigationbar';
import './App.css';
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Connexion from './components/Connexion';
import HomePage from './Pages/HomePage';
import ServicePage from './Pages/ServicePage';

import SearchPage from './Pages/SearchPage';
import Profile from './components/Profile';
import Details from './components/Details';




const App = () => {
  // test
  return (
    <div>
 
 <Navigationbar/> 

     
      <Routes>    
        <Route path="/"  element={<HomePage/>} /> 
        <Route path='/ServicePage' element={<ServicePage/>} />
        <Route path='/ConnexionPage' element={<Connexion/>} />
        <Route path='/SignupPage' element={<SignUp/>} />
        <Route path='/Search' element={<SearchPage/>} />
        <Route path='/CareGiver/:id' element={<Profile/>} />
        <Route path='/Search' element={<SearchPage/>} />
        <Route path='/Details/:id' element={<Details/>} />
       
      </Routes>
   
    </div>
  );
};

export default App;
