import './ZooAnimal.css'

import { deleteAnimal } from "../AnimalService";

// import Card from 'react-bootstrap/Card';
// import Button from "react-bootstrap/esm/Button";
// import ListGroup from "react-bootstrap/ListGroup";
// import Col from 'react-bootstrap/Col'


const ZooAnimal = ({animal, removeAnimal}) => {
     const  handleClick = () => {
            removeAnimal(animal._id)
            deleteAnimal(animal._id)
     }

    return(

        <div className="card middle">

            <div className="front">
                <img src={animal.image_link} alt={animal.name} />
            </div>

            <div className="back">
                <div className="back-content middle">
                    <h3>{animal.name}</h3>
                    <div className="info">
                        <p>Type: {animal.animal_type}</p>
                        <p>Habitat: {animal.habitat}</p>
                        <p>Diet: {animal.diet}</p>
                        <button variant="primary" onClick={handleClick}> Release Animal </button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default ZooAnimal;


// import { deleteAnimal } from "../AnimalService";

// import Card from 'react-bootstrap/Card';
// import Button from "react-bootstrap/esm/Button";
// import ListGroup from "react-bootstrap/ListGroup";
// import Col from 'react-bootstrap/Col'


// const ZooAnimal = ({animal, removeAnimal}) => {
//      const  handleClick = () => {
//             removeAnimal(animal._id)
//             deleteAnimal(animal._id)
//      }

//     return(
//         <Col>
//         <Card style ={{width:'18rem'}}>
//             <Card.Img variant="top" src={animal.image_link} alt={animal.name} style={{width: "100%", height: "40vh", objectFit: 'cover'}}/>
//             <Card.Body>
//             <Card.Title>{animal.name}</Card.Title>
//             </Card.Body>
//             <ListGroup variant="flush">
//                 <ListGroup.Item>Type: {animal.animal_type}</ListGroup.Item>
//                 <ListGroup.Item>Habitat: {animal.habitat}</ListGroup.Item>
//                 <ListGroup.Item>Diet: {animal.diet}</ListGroup.Item>
//             </ListGroup>
//             <Card.Body>
//             <Button variant="primary" onClick={handleClick}> Release Animal </Button>
//             </Card.Body>
//         </Card>
//         </Col>
//     )
// }

// export default ZooAnimal;