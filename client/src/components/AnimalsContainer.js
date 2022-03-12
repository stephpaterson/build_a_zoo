import AnimalItem from "./AnimalItem";

const AnimalsContainer = ({fetchedAnimals, setAddAnimal, removeFetchedAnimal}) => {


    const animalItemNodes = fetchedAnimals.map((animal) => {

        return <AnimalItem animal={animal} key={animal.id} setAddAnimal={setAddAnimal} removeFetchedAnimal={removeFetchedAnimal}/>

    })


    return (

        <ul>
            {animalItemNodes}
        </ul>  

    );
}

export default AnimalsContainer;