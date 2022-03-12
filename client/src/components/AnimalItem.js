

const AnimalItem = ({animal}) => {


    return (
        <li>
            <p>{animal.name}</p>
            <p>{animal.animal_type}</p>
            <p>{animal.habitat}</p>
            <p>{animal.diet}</p>
            <img  width='200px' heigh='auto'src={animal.image_link} alt={animal.name} />
            <button></button>
        </li> 
     );
}

export default AnimalItem;