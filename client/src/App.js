import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import AnimalPageContainer from './containers/AnimalsPageContainer';
import ZooPageContainer from './containers/ZooPageContainer';


function App() {

  return (
    <BrowserRouter>
        <nav>
            <h1>Build a ZOO</h1>

            <ul>
                <li>
                    <Link to = '/animals'>Find Animals</Link>
                </li>
                <li>
                    <Link to = '/zoo'>Visit my ZOO</Link>
                </li>
            </ul>
        </nav>

            <Routes>
                <Route path='/animals' component={AnimalPageContainer} />
                <Route path='/zoo' component={ZooPageContainer} />
            </Routes>

    </BrowserRouter>

  );
}

export default App;
