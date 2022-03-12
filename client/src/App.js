import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AnimalPageContainer from './containers/AnimalsPageContainer';
import ZooPageContainer from './containers/ZooPageContainer';
import HomePageContainer from './containers/HomePageContainer';


function App() {

  return (


    <BrowserRouter>

        <Navbar />
        <Routes>
            <Route path='/' element={<HomePageContainer />} />
            <Route path='/animals' element={<AnimalPageContainer />} />
            <Route path='/zoo' element={<ZooPageContainer />} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;
