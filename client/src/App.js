import './App.css';
import React from 'react'
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';

import Navbar from './components/Navbar';
import AnimalPageContainer from './containers/AnimalsPageContainer';
import ZooPageContainer from './containers/ZooPageContainer';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (

    <>
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      contentLabel = 'user options'>
    <h1>Welcome!</h1>
        <p>Welcome to build a zoo! Explore different animals and learn abotu them in your Zoo!</p>
        <form>
            <label value="">What's your Zoo Keeper name?</label>
            <input type="text" id="name" name="name"/>
            <button onClick={toggleModal}>Ok</button>
        </form>
    </Modal>
    <BrowserRouter>

        <Navbar />
        <Routes>
            <Route path='/' element={<AnimalPageContainer />} />
            <Route path='/zoo' element={<ZooPageContainer />} />
        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
