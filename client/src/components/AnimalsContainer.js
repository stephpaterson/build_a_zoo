import './AnimalsContainer.css';
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
            setMessage('Correct answer, the animal has been added to your Zoo');
            addAnimalToZoo();
            setTimeout(() => {
                toggleModal()
                setMessage('')
            }, 1500);
        } else {
            setMessage('Try again')
        }
    }

    const carouselItems = fetchedAnimals.map((animal) => {
        return (
    
        <Carousel.Item key={animal.id}>
        <div className="img">
            <img 
            className="w-100"
            src={animal.image_link}
            alt="animal name"
                style={{objectFit: "cover"}}
            />
            </div>
            <Carousel.Caption>
              <h3> {animal.name}</h3> 
              <button className="add-animal-bttn" onClick={() => handleClick(animal)} >ADD ANIMAL TO YOUR ZOO</button>
            </Carousel.Caption>
        </Carousel.Item>

     ) });

   


    return (
        <>
        <Modal
            isOpen={isModalOpen}
            ariaHideApp={false}
            className={"quiz-modal"}>
            <p className='what-animal'>What type of animal is this?</p>
            <p>{message}</p>
            <div className="buttons">
                <button className='quiz-button' onClick={() => {checkAnswer('Mammal')}}>Mammal</button>
                <button className='quiz-button' onClick={() => {checkAnswer('Bird')}}>Bird</button>
                <button className='quiz-button' onClick={() => {checkAnswer('Reptile')}}>Reptile</button>
                <button className='quiz-button' onClick={() => {checkAnswer('Fish')}}>Fish</button>
                <button className='quiz-button' onClick={() => {checkAnswer('Amphibian')}}>Amphibian</button>
                <button className='quiz-button' onClick={() => {checkAnswer('Invertebrate')}}>Invertebrate</button>
            </div>
        </Modal>

       
       <Carousel>
        {carouselItems}

       </Carousel>
       </>
    );

}



export default AnimalsContainer;