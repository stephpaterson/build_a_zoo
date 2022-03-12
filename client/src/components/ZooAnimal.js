import { deleteAnimal } from "../AnimalService";


const ZooAnimal = ({animal, removeAnimal}) => {
     const  handleClick = () => {
            removeAnimal(animal._id)
            deleteAnimal(animal._id)
     }

    return(

        <li>

            <p>{animal.name}</p>
            <p>{animal.animal_type}</p>
            <p>{animal.habitat}</p>
            <p>{animal.diet}</p>
            <img  width='200px' heigh='auto'src={animal.image_link} alt={animal.name} />

            <button onClick={handleClick}> Release Animal </button>

        </li>

       
       
    )
}

export default ZooAnimal;