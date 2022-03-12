import { useState, useEffect } from "react";

import ZooContainer from "../components/ZooContainer";
import ZooSelect from "../components/ZooSelect";


import { getAnimals } from "../AnimalService";

const ZooPageContainer = () => {

    const [zooAnimals, setZooAnimals] = useState([]);

    useEffect(() => {
        getZooAnimals()
    }, [])

    const getZooAnimals = () => {
        getAnimals()
        .then(data => setZooAnimals(data))
    }

    const removeAnimal = (id) => {
        const temp = zooAnimals.map(s => s)
        const indexToDel = temp.map(s => s._id).indexOf(id)
        temp.splice(indexToDel, 1)
        setZooAnimals(temp)
    }

    return(
        <>
        <h1>Zoo Page Container</h1>
        <ZooSelect/>
        <ZooContainer zooAnimals={zooAnimals} removeAnimal={removeAnimal}/>
        </>
        
    )
}

export default ZooPageContainer;