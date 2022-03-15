import AnimalItem from "./AnimalItem";
import Carousel from "react-bootstrap/Carousel";
import '../App.css';

const AnimalsContainer = ({fetchedAnimals, setAddAnimal, removeFetchedAnimal}) => {


    const animalItemNodes = fetchedAnimals.map((animal) => {

        return <AnimalItem animal={animal} key={animal.id} setAddAnimal={setAddAnimal} removeFetchedAnimal={removeFetchedAnimal}/>

    })

    

    return (

     
        
       
       <Carousel>
            {fetchedAnimals.map((animal) => {
                return (
                <Carousel.Item key={animal.id}>
                <div class="img">
                    <img 
                    className="w-100"
                    src={animal.image_link}
                    alt="animal name"/>
                    </div>
                    <Carousel.Caption>
                      <h3> {animal.name}</h3> 
                    </Carousel.Caption>
                </Carousel.Item>
             ) })}

       </Carousel>



   
        
      
        
 
    
   
        

    );
    }

export default AnimalsContainer;