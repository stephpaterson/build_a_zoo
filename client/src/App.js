import './App.css';
import React from 'react'
import {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';

import Navbar from './components/Navbar';
import AnimalPageContainer from './containers/AnimalsPageContainer';
import ZooPageContainer from './containers/ZooPageContainer';
import UserContext from './context/UserContext';
import NightContext from './context/NightContext';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(true)
  const [ zooKeeperName, setZooKeeperName] = useState("")
  const [ isDarkMode, setIsDarkMode] = useState(false)

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
        <p>Welcome to build a zoo! Explore different animals and learn about them in your Zoo!</p>
        <form onSubmit={handleSubmit} className="zookeeper-form">
            <label >What's your Zoo Keeper name?</label>
            <input className="zookeeper-input" type="text" id="name" name="name" onChange={handleNameChange} autoFocus/>

            <button className="modal-bttn" onClick={toggleModal}>Ok</button>

        </form>
    </Modal>

    <UserContext.Provider value={{zooKeeperName}} >
    <NightContext.Provider value={{isDarkMode, setIsDarkMode}}>
    <BrowserRouter>
        <div className={isDarkMode ? "night-time" : "day-time"}>
        <Navbar />
        <Routes>
            <Route path='/' element={<AnimalPageContainer />} />
            <Route path='/zoo' element={<ZooPageContainer />} />
        </Routes>
        </div>
    </BrowserRouter>
    </NightContext.Provider>
    </UserContext.Provider>
    </>
  );
}

export default App;
