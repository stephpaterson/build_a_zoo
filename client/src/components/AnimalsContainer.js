import AnimalItem from "./AnimalItem";
import Carousel from "react-bootstrap/Carousel";

const AnimalsContainer = ({fetchedAnimals, setAddAnimal, removeFetchedAnimal}) => {


    const animalItemNodes = fetchedAnimals.map((animal) => {

        return <AnimalItem animal={animal} key={animal.id} setAddAnimal={setAddAnimal} removeFetchedAnimal={removeFetchedAnimal}/>

    })


    return (

       <Carousel>
            {fetchedAnimals.map((animal) => {
                return (
                <Carousel.Item key={animal.id}>
                    <img 
                    className="d-block w-100"
                    src={animal.image_link}
                    alt="animal name"/>
                </Carousel.Item>
             ) })}

       </Carousel>
        
 
    
   
        

    );
    }

export default AnimalsContainer;