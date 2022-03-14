import ZooAnimal from "./ZooAnimal";
import { useState } from "react";
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'


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
        <button onClick={event => setShowAnimals(event.target.value)} value=''>Show all the animals</button>
        <button onClick={event => setShowAnimals(event.target.value)} value='Diurnal'>See the animals active in the daytime</button>
        <button onClick={event => setShowAnimals(event.target.value)} value='Nocturnal'>See the animals active at night</button>
        <Container>
            <Row md={3} sm={1}>
                {zooAnimalNodes}
            </Row>
        </Container>
        
        </>
    )
}

export default ZooContainer;