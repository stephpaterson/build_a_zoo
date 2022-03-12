

const AnimalItem = ({animal, setAddAnimal}) => {


    return (
        <li>
            <p>{animal.name}</p>
            <p>{animal.animal_type}</p>
            <p>{animal.habitat}</p>
            <p>{animal.diet}</p>
            <img  width='200px' heigh='auto'src={animal.image_link} alt={animal.name} />
            <button onClick={()=>{setAddAnimal(animal)}}>Add Animal to Your Zoo</button>
        </li> 
     );
}

export default AnimalItem;