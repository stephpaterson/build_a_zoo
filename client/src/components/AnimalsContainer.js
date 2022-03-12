import AnimalItem from "./AnimalItem";

const AnimalsContainer = ({fetchedAnimals}) => {


    const animalItemNodes = fetchedAnimals.map((animal) => {

        return <AnimalItem animal={animal} key={animal.id} />

    })


    return (

        <ul>
            {animalItemNodes}
        </ul>  

    );
}

export default AnimalsContainer;