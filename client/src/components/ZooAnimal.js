import { deleteAnimal } from "../AnimalService";

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"


const ZooAnimal = ({animal, removeAnimal}) => {
     const  handleClick = () => {
            removeAnimal(animal._id)
            deleteAnimal(animal._id)
     }

    return(

        <Card style ={{width:'18rem'}}>
            <Card.Img variant="top" src={animal.image_link} alt={animal.name} />
            <Card.Body>
            <Card.Title>{animal.name}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>{animal.animal_type}</ListGroup.Item>
                <ListGroup.Item>{animal.habitat}</ListGroup.Item>
                <ListGroup.Item>{animal.diet}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Button variant="primary" onClick={handleClick}> Release Animal </Button>
            </Card.Body>
        </Card>

       
       
    )
}

export default ZooAnimal;