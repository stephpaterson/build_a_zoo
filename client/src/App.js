import './App.css';
import React from 'react'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
        <nav>
            <h1>Build a ZOO</h1>

            <ul>
                <li>
                    <Link to = '#'>Find Animals</Link>
                </li>
                <li>
                    <Link to = '#'>Visit my ZOO</Link>
                </li>
            </ul>
        </nav>
    </BrowserRouter>

  );
}

export default App;
