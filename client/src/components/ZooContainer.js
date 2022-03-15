import ZooAnimal from "./ZooAnimal";
import { useState } from "react";
import {Container , Row, Button } from "react-bootstrap"


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
        <Container>
        <h2>Visit the animals in your zoo</h2>
        <Button onClick={event => setShowAnimals(event.target.value)} value=''>Show all the animals</Button>
        <Button onClick={event => setShowAnimals(event.target.value)} value='Diurnal'>See the animals active in the daytime</Button>
        <Button onClick={event => setShowAnimals(event.target.value)} value='Nocturnal'>See the animals active at night</Button>
        </Container>
        <Container>
            <Row md={3} sm={1}>
                {zooAnimalNodes}
            </Row>
        </Container>
        </>
    )
}

export default ZooContainer;