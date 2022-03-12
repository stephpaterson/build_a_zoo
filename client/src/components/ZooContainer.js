import ZooAnimal from "./ZooAnimal";

const ZooContainer = ({zooAnimals}) => {

    const zooAnimalNodes = zooAnimals.map((animal) => {
            return <ZooAnimal animal={animal} key={animal.id} />
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