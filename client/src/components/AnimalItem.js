import React from "react";

import Card from 'react-bootstrap/Card';

import { useState } from "react";
import Modal from 'react-modal';

import { postAnimal } from "../AnimalService";
import {Button,  Carousel} from "react-bootstrap";


const AnimalItem = ({animal, removeFetchedAnimal}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    // const [quizAnswers, setQuizAnswers] = useState('')
    const [message, setMessage] = useState('')


    const addAnimalToZoo = () => {

        postAnimal(animal)
        removeFetchedAnimal(animal._id);

    }

    const toggleModal = () => {

        setIsModalOpen(!isModalOpen);

    }

    const checkAnswer = (quizAnswers) => {

        if(quizAnswers === animal.animal_type) {

            setMessage('correct')
            setTimeout(() => addAnimalToZoo(), 1500)
            
            // setTimeout(toggleModal(), 1000);

        } else {
            setMessage('try again')

        }

    }


    return (

        <>
        <Modal
            isOpen={isModalOpen}
            ariaHideApp={false}
            contentLabel = 'user options'>
            <p>What type of animal is this?</p>
            <div className="buttons">
                <button onClick={() => {checkAnswer('Mammal')}}>Mammal</button>
                <button onClick={() => {checkAnswer('Bird')}}>Bird</button>
                <button onClick={() => {checkAnswer('Reptile')}}>Reptile</button>
                <button onClick={() => {checkAnswer('Fish')}}>Fish</button>
                <button onClick={() => {checkAnswer('Amphibian')}}>Amphibian</button>
                <button onClick={() => {checkAnswer('Invertebrate')}}>Invertebrate</button>
            </div>
            <p>{message}</p>
        </Modal>
        {/* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={animal.image_link} alt={animal.name}/>
            <Card.Body>
            <Card.Title>{animal.name}</Card.Title>
            <Button variant="primary" onClick={toggleModal} >Add Animal to Your Zoo</Button>
            </Card.Body>
        </Card>  */}
        
        
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={animal.image_link}
                alt="First-slide"
                    />
            <Carousel.Caption>
            <h3>{animal.name}</h3>
     
            </Carousel.Caption>
        </Carousel.Item>
 
                </>

     );
     
}

export default AnimalItem;