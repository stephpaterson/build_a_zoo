import './App.css';
import React from 'react'
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleModal()
  }



  return (

    <>
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      contentLabel = 'user options'
      className={"welcome-modal"}>
        <h1>Welcome!</h1>
        <p>Welcome to build a zoo! Explore different animals and learn abotu them in your Zoo!</p>
        <form onSubmit={handleSubmit} className="zookeeper-form">
            <label value="">What's your Zoo Keeper name?</label>
            <input className="zookeeper-input" type="text" id="name" name="name" onChange={handleNameChange} autoFocus/>
            <button>Ok</button>
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
