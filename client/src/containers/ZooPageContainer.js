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

    return(
        <>
        <h1>Zoo Page Container</h1>
        <ZooSelect/>
        <ZooContainer/>
        </>
        
    )
}

export default ZooPageContainer;