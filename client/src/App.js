import './App.css';
import React from 'react'
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';

import Button from 'react-bootstrap/Button';

import Navbar from './components/Navbar';
import AnimalPageContainer from './containers/AnimalsPageContainer';
import ZooPageContainer from './containers/ZooPageContainer';
import UserContext from './context/UserContext';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)
  const [ zooKeeperName, setZooKeeperName] = useState("")

  const handleNameChange = (event) => {
    setZooKeeperName(event.target.value)
  }

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
        <form className="zookeeper-form">
            <label value="">What's your Zoo Keeper name?</label>
            <input className="form-control zookeeper-input" type="text" id="name" name="name" onChange={handleNameChange}/>
            
            <Button onClick={toggleModal}>Ok</Button>
        </form>
    </Modal>
    <UserContext.Provider value={{zooKeeperName}} >
    <BrowserRouter>

        <Navbar />
        <Routes>
            <Route path='/' element={<AnimalPageContainer />} />
            <Route path='/zoo' element={<ZooPageContainer />} />
        </Routes>

    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
