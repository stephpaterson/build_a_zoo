import { postAnimal } from "../AnimalService";

const AnimalItem = ({animal, removeFetchedAnimal}) => {

    const handleClick = () => {
        postAnimal(animal)
        removeFetchedAnimal(animal._id);
    }


    return (
        <li>
            <p>{animal.name}</p>
            <img  width='200px' heigh='auto'src={animal.image_link} alt={animal.name} />
            <button onClick={handleClick}>Add Animal to Your Zoo</button>
        </li> 
     );
}

export default AnimalItem;