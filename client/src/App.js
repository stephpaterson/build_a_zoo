import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AnimalPageContainer from './containers/AnimalsPageContainer';
import ZooPageContainer from './containers/ZooPageContainer';


function App() {

  return (


    <BrowserRouter>

        <Navbar />
        <Routes>
            <Route path='/animals' element={<AnimalPageContainer />} />
            <Route path='/zoo' element={<ZooPageContainer />} />
        </Routes>

    </BrowserRouter>

  );
}

export default App;
