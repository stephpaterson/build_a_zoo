import { useState } from "react";
import Modal from 'react-modal';

import { postAnimal } from "../AnimalService";

const AnimalItem = ({animal, removeFetchedAnimal}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)



    const handleClick = () => {
        postAnimal(animal)
        removeFetchedAnimal(animal._id);
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
            <form>
                {/* <label value="">What's your Zoo Keeper name?</label>
                <input type="text" id="name" name="name" onChange={handleNameChange}/> */}
                <button onClick={toggleModal}>Ok</button>
            </form>
        </Modal>
        <li>
            <p>{animal.name}</p>
            <img  width='200px' heigh='auto'src={animal.image_link} alt={animal.name} />
            <button onClick={toggleModal} >Add Animal to Your Zoo</button>
            {/* <button onClick={handleClick} >Add Animal to Your Zoo</button> */}
        </li> 
        </>

     );
}

export default AnimalItem;