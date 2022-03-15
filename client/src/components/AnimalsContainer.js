import '../App.css';
import { useState } from "react";
import { postAnimal } from "../AnimalService";
import Modal from 'react-modal';
import { Carousel } from "react-bootstrap";

const AnimalsContainer = ({fetchedAnimals, setAddAnimal, removeFetchedAnimal}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [selectedAnimal, setSelectedAnimal] = useState({})

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        
    }

    const addAnimalToZoo = () => {
        postAnimal(selectedAnimal);
        removeFetchedAnimal(selectedAnimal.id);
    }

    const handleClick = (animal) => {
        toggleModal();
        setSelectedAnimal(animal);
    }

    const checkAnswer = (quizAnswers) => {
        if(quizAnswers === selectedAnimal.animal_type) {
            setMessage('correct');
            addAnimalToZoo();
            setTimeout(() => {
                toggleModal()
                setMessage('')
            }, 1500);
        } else {
            setMessage('try again')
        }
    }

    const carouselItems = fetchedAnimals.map((animal) => {
        return (
    
        <Carousel.Item key={animal.id}>
        <div className="img">
            <img 
            className="w-100"
            src={animal.image_link}
            alt="animal name"/>
            </div>
            <Carousel.Caption>
              <h3> {animal.name}</h3> 
              <button onClick={() => handleClick(animal)} >Add Animal to Your Zoo</button>
            </Carousel.Caption>
        </Carousel.Item>

     ) });

   


    return (
        <>
        <Modal
            isOpen={isModalOpen}
            ariaHideApp={false}>
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

       
       <Carousel>
        {carouselItems}
       </Carousel>
       </>

    );


}

    


export default AnimalsContainer;