import ZooAnimal from "./ZooAnimal";
 import { useState } from "react";

const ZooContainer = ({zooAnimals, removeAnimal}) => {

    const [showAnimals, setShowAnimals] = useState('')


    const zooAnimalNodes = zooAnimals.filter(animal => {
        if(animal.active_time.includes(showAnimals) ) {
            return animal
        }}).map((animal) => {
        return <ZooAnimal animal={animal} key={animal._id} removeAnimal={removeAnimal} />
        })

    return (
        <>
        <h2>Visit the animals</h2>
        <button onClick={event => setShowAnimals(event.target.value)} value=''>Show All</button>
        <button onClick={event => setShowAnimals(event.target.value)} value='Diurnal'>See the animals active in the daytime</button>
        <button onClick={event => setShowAnimals(event.target.value)} value='Nocturnal'>See the animals active at night</button>
        <ul>
        {zooAnimalNodes}
        </ul>
        
        </>
    )
}

export default ZooContainer;