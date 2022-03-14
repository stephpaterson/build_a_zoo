import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import Modal from 'react-modal';

import { postAnimal } from "../AnimalService";

const AnimalItem = ({animal, removeFetchedAnimal}) => {



    const [isModalOpen, setIsModalOpen] = useState(false)
    const [quizAnswers, setQuizAnswers] = useState('')
    // const [correctAnswer, setCorrectAnswer] = useState('')

    const addAnimalToZoo = () => {
        postAnimal(animal)
        removeFetchedAnimal(animal._id);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const checkAnswer = () => {

        if(quizAnswers === animal.animal_type) {
            addAnimalToZoo()
            toggleModal()
        } else {
        }

    }

    useEffect(() => {
        checkAnswer()
    }, [quizAnswers])


    return (

        <>
        <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        contentLabel = 'user options'>
        <p>What type of animal is this?</p>
        <div className="buttons">
            <button onClick={() => {setQuizAnswers('Mammal')}}>Mammal</button>
            <button onClick={() => {setQuizAnswers('Bird')}}>Bird</button>
            <button onClick={() => {setQuizAnswers('Reptile')}}>Reptile</button>
            <button onClick={() => {setQuizAnswers('Fish')}}>Fish</button>
            <button onClick={() => {setQuizAnswers('Amphibian')}}>Amphibian</button>
            <button onClick={() => {setQuizAnswers('Invertebrate')}}>Invertebrate</button>
        </div>
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