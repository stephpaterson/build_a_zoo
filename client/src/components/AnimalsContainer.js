import AnimalItem from "./AnimalItem";

const AnimalsContainer = ({fetchedAnimals, setAddAnimal}) => {


    const animalItemNodes = fetchedAnimals.map((animal) => {

        return <AnimalItem animal={animal} key={animal.id} setAddAnimal={setAddAnimal}/>

    })


    return (

        <ul>
            {animalItemNodes}
        </ul>  

    );
}

export default AnimalsContainer;