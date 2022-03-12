import ZooAnimal from "./ZooAnimal";

const ZooContainer = ({zooAnimals, removeAnimal}) => {

    const zooAnimalNodes = zooAnimals.map((animal) => {
            return <ZooAnimal animal={animal} key={animal.id} removeAnimal={removeAnimal} />
    })


    return (
        <>
        <h2>Zoo Container</h2>
        <ul>
        {zooAnimalNodes}
        </ul>
        
        </>
    )
}

export default ZooContainer;