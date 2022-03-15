import "./ZooContainer.css"
import { useState } from "react"
import AllZooComponent from "./AllZooComponent"
import DiurnalZooComponent from "./DiurnalZooComponent"
import NocturnalZooComponent from "./NocturnalZooComponent"

import {Button, Container, Row} from 'react-bootstrap';


const ZooContainer = ({zooAnimals, removeAnimal}) => {

    const [whatZoo, setWhatZoo] = useState('')

    // const [showAnimals, setShowAnimals] = useState('')


    // const zooAnimalNodes = zooAnimals.filter(animal => {
    //     if(animal.active_time.includes(showAnimals) ) {
    //         return animal
    //     }}).map((animal) => {
    //     return <ZooAnimal animal={animal} key={animal._id} removeAnimal={removeAnimal} />
    //     })

    const returnRightZooComponent = () => {

            return zooAnimals.filter(animal => {
                    return animal.active_time.includes(whatZoo)
                    }).map((animal) => {
                        if(whatZoo === '') {
                            return <AllZooComponent animal={animal} key={animal._id} removeAnimal={removeAnimal} />
                        } if (whatZoo === 'Diurnal'){
                            return <DiurnalZooComponent animal={animal} key={animal._id} removeAnimal={removeAnimal} />
                        }
                         if (whatZoo === 'Nocturnal'){
                            return <NocturnalZooComponent animal={animal} key={animal._id} removeAnimal={removeAnimal} />
                        }
                    })
        }

    const showBackGroundColor = () => {
        if (whatZoo === '') {
            return 'light'
        }
        if (whatZoo === 'Diurnal') {
            return 'light'
        }
        if (whatZoo === 'Nocturnal') {
            return 'dark'
        }
    }

    const showInfo = () => {

        if (whatZoo === 'Diurnal') {
            return <p>Diurnal Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, hic. Sint voluptatibus sapiente iusto voluptates, atque rem a odio deleniti velit eveniet eum quis quae.</p>
        }
        if (whatZoo === 'Nocturnal') {
            return <p>Nocturnal Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptas ea ipsa corrupti libero. Non doloremque vitae necessitatibus assumenda excepturi atque dicta quidem. A, molestias.</p>
        }
    }

        // if (whatZoo === 'Diurnal') {
        //     return zooAnimals.filter(animal => {
        //         if(animal.active_time.includes(whatZoo) ) {
        //             return animal
        //         }}).map((animal) => {
        //         return <DiurnalZooComponent animal={animal} key={animal._id} removeAnimal={removeAnimal} />
        //         })
        // }
        // if (whatZoo === 'Nocturnal') {
        //     return (<NocturnalZooComponent zooAnimals={zooAnimals} removeAnimal={removeAnimal}/>)
        // }

    return (

        <div className={showBackGroundColor()}>
        <Container>
        <h2>Visit the animals in your zoo</h2>
        <Button onClick={event => setWhatZoo(event.target.value)} value=''>Show all the animals</Button>
        <Button onClick={event => setWhatZoo(event.target.value)} value='Diurnal'>See the animals active in the daytime</Button>
        <Button onClick={event => setWhatZoo(event.target.value)} value='Nocturnal'>See the animals active at night</Button>
        </Container>
        <Container>
            {showInfo()}
            <Row md={3} sm={1}>
            {returnRightZooComponent()}
            </Row>
        </Container> 
        </div>
    )
}

export default ZooContainer;